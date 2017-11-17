import { beginAjaxCall, ajaxCallError } from '../ajaxstatus';
import { getAllImages } from './imagesApi';

export const GET_ALL_IMAGES_SUCCESS = 'GET_ALL_IMAGES_SUCCESS';

export const loadGetAllImagesSuccess = (images) => {

    if (!images || !(images.length >= 0)) {
        images = [];
    }

    return { type: GET_ALL_IMAGES_SUCCESS, images };
};

export const getImages = () => {
    return async (dispatch) => {

        try {
            dispatch(beginAjaxCall());

            const images = await getAllImages();

            dispatch(loadGetAllImagesSuccess(images));

            return images;
            
        } catch (error) {

            dispatch(ajaxCallError());
        }
    }
};