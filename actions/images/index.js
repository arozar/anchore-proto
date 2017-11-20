import { beginAjaxCall, ajaxCallError } from '../ajaxstatus';
import { getAllImages, getImageVuln } from './imagesApi';

export const GET_ALL_IMAGES_SUCCESS = 'GET_ALL_IMAGES_SUCCESS';

export const GET_IMAGES_VULN_SUCCESS = 'GET_IMAGES_VULN_SUCCESS';

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

export const loadGetImagesVulnSuccess = (vulnData) => {

    if (!vulnData) {
        vulnData = [];
    }

    return { type: GET_IMAGES_VULN_SUCCESS, vulnData: vulnData.vulnerabilities };
}

export const getImageVulnByDigest = (imageDigest) => {
    return async (dispatch) => {

        try {

            dispatch(beginAjaxCall());

            const vulnData = await getImageVuln(imageDigest);

            dispatch(loadGetImagesVulnSuccess(vulnData));

        } catch (error) {
            dispatch(ajaxCallError());
        }
    }
}