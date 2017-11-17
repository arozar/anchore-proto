import * as types from '../actions/images';
import initialState from './initialState';

export default function ImagesReducer(state = initialState.images, action) {
    switch(action.type){
        case types.GET_ALL_IMAGES_SUCCESS:
            return { ...state, ...{list: action.images} };
        default:
            return state;    
    }
}