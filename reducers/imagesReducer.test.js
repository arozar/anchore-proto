import ImagesReducer from './imagesReducer';
import { GET_ALL_IMAGES_SUCCESS, GET_IMAGES_VULN_SUCCESS } from '../actions/images';

describe('Images reducer',() => {

    it('Assigns array to state list prop on success',() => {

        const action = { type: GET_ALL_IMAGES_SUCCESS, images:[] };

        const state = ImagesReducer({},action);

        expect(state.list).toBe(action.images)
    });

    it('Assigns array to vulnData prop on success', () => {

        const action = { type: GET_IMAGES_VULN_SUCCESS, vulnData: [] };

        const state = ImagesReducer({}, action);

        expect(state.vulnData).toBe(action.vulnData)
    });

});