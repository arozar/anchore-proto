import { combineReducers } from 'redux'
import ajaxStatus from './ajaxStatusReducer';
import images from './imagesReducer';

export default combineReducers({
    ajaxStatus,
    images
  })
  