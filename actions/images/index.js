import { beginAjaxCall ,ajaxCallError } from '../ajaxstatus';
import { getAllImages } from './imagesApi';

export const GET_ALL_IMAGES_SUCCESS = 'GET_ALL_IMAGES_SUCCESS';

export const loadGetAllCharacterSuccess  = (characters) =>{

    if(!characters || !(characters.length >= 0)){
        characters = [];
    }

    return { type: GET_ALL_IMAGES_SUCCESS,characters };
};

export const getImages = () =>{
    return async (dispatch) =>{
        beginAjaxCall(dispatch);


    }
};