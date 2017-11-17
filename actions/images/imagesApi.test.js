import { getAllImages, imagesUrl, getImageVuln, getVulnUrl, createRequestHeaders } from './imagesApi'
import { create } from 'domain';

describe('GET Images', () => {

    beforeEach(() => {
        td.replace(global, 'fetch');
    });

    afterEach(() => {
        td.reset();
    });

    it('getAllImages fetches images url', async () => {

        const images = [];

        const response = { then: () => images };

        td.when(fetch(imagesUrl,td.matchers.anything())).thenReturn(response);

        const result = await getAllImages();

        expect(result).toBe(images);
    });
});

describe('GET Images Vuln', () => {

    beforeEach(() => {
        td.replace(global, 'fetch');
    });

    afterEach(() => {
        td.reset();
    });

    it('getImageVuln fetches getVulnUrl', () => {

        const imageDigest = 'someRandomVal';

        const vulnData = { imageDigest: '', vulnerabilities: [] };

        const response = { then: () => vulnData };

        const imageVulnUrl = getVulnUrl(imageDigest);

        td.when(fetch(imageVulnUrl)).thenReturn(response);
    });


});

describe('createRequestHeaders',() => {
    
    // beforeEach(() => {
    //     process.env.user = 
    // });

    // afterEach(() => {
    //     td.reset();
    // });
    
    // it('should use env username and password', () => {

    //     const usernameDouble = td.replace(process.env, 'API_USER');

    //     const passwordDouble = td.replace(process.env, 'API_PASS');
        
    //     createRequestHeaders();

    //     td.verify()
    // });

    // it('', () =>{

    // });
});