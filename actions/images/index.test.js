import { loadGetAllImagesSuccess
    , GET_ALL_IMAGES_SUCCESS
    , getImages
    , getImageVulnByDigest
    , loadGetImagesVulnSuccess } from './index';


describe('loadGetAllImagesSuccess', () => {

    it(' returns correct action', () => {

        const images = [];

        const action = loadGetAllImagesSuccess(images);


        expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

        expect(action.images).toBe(images);
    });

    it('returns empty array on if no array is provided', () => {

        const characters = {};

        const action = loadGetAllImagesSuccess(characters);


        expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

        expect(action.images.length).toBe(0);
    });
});

describe('getImages', () => {

    let ajaxstatus,
        imagesApi,
        beginAjaxCallDouble,
        getAllImagesDouble,
        dispatch;

    beforeEach(() => {
        ajaxstatus = require('../ajaxstatus');

        imagesApi = require('./imagesApi');

        beginAjaxCallDouble = td.replace(ajaxstatus, 'beginAjaxCall');

        getAllImagesDouble = td.replace(imagesApi, 'getAllImages');

        dispatch = td.function();

    });

    afterEach(() => {
        td.reset();
    });

    it('dispatches loading action', () => {

        const thunk = getImages();

        thunk(dispatch);

        td.verify(dispatch(beginAjaxCallDouble()))
    });

    it('calls Api', () => {

        const thunk = getImages();

        thunk(dispatch);

        td.verify(getAllImagesDouble());
    });

    it('returns images', async () => {

        const images = [];

        td.when(getAllImagesDouble()).thenReturn(images);

        const thunk = getImages();

        await thunk(dispatch);

        td.verify(dispatch(loadGetAllImagesSuccess(images)));
    });

    it('on error dispatches ajax error', async () => {

        const ajaxErrorDouble = beginAjaxCallDouble = td.replace(ajaxstatus, 'ajaxCallError');

        const images = [];

        td.when(getAllImagesDouble()).thenThrow(new Error());

        const thunk = getImages();

        const result = await thunk(dispatch);
        
        td.verify(ajaxErrorDouble());
    });
});

describe('loadGetImagesVulnSuccess', () => {

    // it(' returns correct action', () => {

    //     const images = [];

    //     const action = loadGetAllImagesSuccess(images);


    //     expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

    //     expect(action.images).toBe(images);
    // });

    // it('returns empty array on if no array is provided', () => {

    //     const characters = {};

    //     const action = loadGetAllImagesSuccess(characters);


    //     expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

    //     expect(action.images.length).toBe(0);
    // });
});

describe('getImageVuln', () => {

    let ajaxstatus,
        imagesApi,
        beginAjaxCallDouble,
        apiImageVulnDouble,
        dispatch;

    beforeEach(() => {
        ajaxstatus = require('../ajaxstatus');

        imagesApi = require('./imagesApi');

        beginAjaxCallDouble = td.replace(ajaxstatus, 'beginAjaxCall');

        apiImageVulnDouble = td.replace(imagesApi, 'getImageVuln');

        dispatch = td.function();

    });

    afterEach(() => {
        td.reset();
    });

    it('dispatches loading action', () => {

        const thunk = getImageVulnByDigest();

        thunk(dispatch);

        td.verify(dispatch(beginAjaxCallDouble()))
    });

    it('calls Api', () => {

        const imageDigest = 'digest1';

        const thunk = getImageVulnByDigest(imageDigest);

        thunk(dispatch);

        td.verify(apiImageVulnDouble(imageDigest));
    });

    it('returns images', async () => {

        const imageDigest = 'digest1';        

        const vulnData = [];

        td.when(apiImageVulnDouble(imageDigest)).thenReturn(vulnData);

        const thunk = getImageVulnByDigest(imageDigest);

        await thunk(dispatch);

        td.verify(dispatch(loadGetImagesVulnSuccess(vulnData)));
    });

    it('on error dispatches ajax error', async () => {

        const imageDigest = 'digest1';

        const ajaxErrorDouble = beginAjaxCallDouble = td.replace(ajaxstatus, 'ajaxCallError');

        td.when(apiImageVulnDouble(imageDigest)).thenReject(new Error());

        const thunk = getImageVulnByDigest(imageDigest);

        const result = await thunk(dispatch);

        td.verify(ajaxErrorDouble());
    });
});
