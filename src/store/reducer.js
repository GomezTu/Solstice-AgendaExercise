import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_CONTACTS_REQUEST:
      return { ...state, fetching: true };
    case types.GET_CONTACTS_REQUEST_SUCCESS:
      return { ...state, contacts: action.payload, fetching: false };
    case types.GET_CONTACTS_REQUEST_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case types.RAISE_ERROR:
      return { ...state, error: action.payload };
    case types.FILTER_CHANGE:
      return { ...state, filter: action.payload };
    case types.SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return { ...state };
  }
};