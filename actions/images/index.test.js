import { loadGetAllCharacterSuccess, GET_ALL_IMAGES_SUCCESS, getImages } from './index';


describe('loadGetAllCharacterSuccess', () => {

    it(' returns correct action', () => {

        const characters = [];

        const action = loadGetAllCharacterSuccess(characters);


        expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

        expect(action.characters).toBe(characters);
    });

    it('returns empty array on if no array is provided', () => {

        const characters = {};

        const action = loadGetAllCharacterSuccess(characters);


        expect(action.type).toBe(GET_ALL_IMAGES_SUCCESS);

        expect(action.characters.length).toBe(0);
    });
});

describe('getImages',() => {

    beforeEach(() => {
        
    });

    afterEach(() => {
        td.reset();
    });

    it('dispatches loading action', () => {

        const ajaxstatus = require('../ajaxstatus');

        const beginAjaxCall = td.replace(ajaxstatus, 'beginAjaxCall');

        const dispatch = () => {};

        const thunk  = getImages();

        thunk(dispatch);

        td.verify(beginAjaxCall(dispatch))
    });

    it('calls Api', () => {
        
    });
});