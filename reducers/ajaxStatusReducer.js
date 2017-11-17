import * as types from '../actions/ajaxstatus';
import initialState from './initialState';

//to work out if this action is the result of an API call finishing
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxStatus, action) {

  if (action.type === types.BEGIN_AJAX_CALL) {

    return Object.assign({}, { loading: true, error: false });

  } else if (action.type === types.AJAX_CALL_ERROR) {

    return Object.assign({}, { loading: false, error: true });
    
  } else if (actionTypeEndsInSuccess(action.type)) {

    return Object.assign({}, { loading: false, error: false });
  }

  return state;
}
