export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const AJAX_STATUS_SUCCESS = 'AJAX_STATUS_SUCCESS';

export function beginAjaxCall() {
  return { type: BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: AJAX_CALL_ERROR };
}

