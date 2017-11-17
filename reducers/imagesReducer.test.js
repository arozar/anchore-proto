import ImagesReducer from './imagesReducer';
import { GET_ALL_IMAGES_SUCCESS } from '../actions/images';

describe('Images reducer',() => {

    it('Assigns array to state list prop on success',() => {

        const action = { type: GET_ALL_IMAGES_SUCCESS, images:[] };

        const state = ImagesReducer({},action);

        expect(state.list).toBe(action.images)
    });

});