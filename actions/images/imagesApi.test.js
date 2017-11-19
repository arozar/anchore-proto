import { getAllImages, imagesUrl, getImageVuln, getVulnUrl } from './imagesApi'
import { create } from 'domain';

describe('GET Images', () => {

    let images
    ,response

    beforeEach(() => {
        td.replace(global, 'fetch');

        images = [];
        
                response = { then: () => images };
    });

    afterEach(() => {
        td.reset();
    });

    it('getAllImages fetches images url', async () => {
        td.when(fetch(imagesUrl,td.matchers.anything())).thenReturn(response);

        const result = await getAllImages();

        expect(result).toBe(images);
    });

    it('getAllImages uses createRequestHeaders', async () => {

        const createRequestHeadersDouble = td.replace(require('./images.security'), 'createRequestHeaders');        

        td.when(fetch(imagesUrl,td.matchers.anything())).thenReturn(response);

        const result = await getAllImages();

        td.verify(createRequestHeadersDouble());
    });
});

describe('GET Images Vuln', () => {

    let imageDigest
    ,vulnData
    ,response
    ,imageVulnUrl;

    beforeEach(() => {
        td.replace(global, 'fetch');

        imageDigest = 'someRandomVal'
        ,vulnData = { imageDigest: '', vulnerabilities: [] }
        ,response = { then: () => vulnData }
        ,imageVulnUrl = getVulnUrl(imageDigest);
    });

    afterEach(() => {
        td.reset();
    });

    it('getImageVuln fetches getVulnUrl', async () => {

        td.when(fetch(imageVulnUrl,td.matchers.anything())).thenReturn(response);

        const result = await getImageVuln(imageDigest);

        expect(result).toBe(vulnData);
    });

    it('getImageVuln uses createRequestHeaders', async () => {

        const createRequestHeadersDouble = td.replace(require('./images.security'), 'createRequestHeaders');

        td.when(fetch(imageVulnUrl, td.matchers.anything())).thenReturn(response);

        await getImageVuln(imageDigest);

        td.verify(createRequestHeadersDouble());
    });
});