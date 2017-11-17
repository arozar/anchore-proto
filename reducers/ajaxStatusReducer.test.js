import ajaxStatusReducer from './ajaxStatusReducer';
import * as types from '../actions/ajaxstatus';

describe('AjaxStatusReducer', () => {

    it('Begin call creates loading state', () => {

        const currentAction = { type: types.BEGIN_AJAX_CALL };

        const initialState = { loading: false, error: false };

        const newState = ajaxStatusReducer(initialState, currentAction);

        expect(newState.loading).toBe(true);
        expect(newState.error).toBe(false);
    })

    it('Ajax Error creates error state and removes loading state', () => {

        const currentAction = { type: types.AJAX_CALL_ERROR };

        const initialState = { loading: true, error: false };

        const newState = ajaxStatusReducer(initialState, currentAction);

        expect(newState.error).toBe(true);
        expect(newState.loading).toBe(false);
    })

    it('Ajax Error creates error state and removes loading state', () => {

        const currentAction = { type: types.AJAX_CALL_ERROR };

        const initialState = { loading: true, error: false };

        const newState = ajaxStatusReducer(initialState, currentAction);

        expect(newState.error).toBe(true);
        expect(newState.loading).toBe(false);
    })

    it('Ajax Success sets loading to false', () => {

        const currentAction = { type: types.AJAX_STATUS_SUCCESS };

        const initialState = { loading: true, error: false };

        const newState = ajaxStatusReducer(initialState, currentAction);

        expect(newState.error).toBe(false);
        expect(newState.loading).toBe(false);
    })
});