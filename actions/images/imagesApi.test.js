import { getAllImages, imagesUrl } from './imagesApi'


describe('images Api',() => {

    beforeEach(() => {
        td.replace(global, 'fetch');        
    });

    afterEach(() => {
        td.reset();
    });

    it('getAllImages fetches images url', async () => {

        const images = [];

        const response = {then: () =>  images };

        td.when(fetch(imagesUrl)).thenReturn(response);

        const result =  await getAllImages();

        expect(result).toBe(images);
    });
})