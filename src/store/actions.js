import * as types from '../constants/actionTypes';
import { URLS } from '../constants/endpoints';

// REQUEST ACTIONS
const contactRequest = () => ({ type: types.GET_CONTACTS_REQUEST });

// SUCCESS ACTIONS
const contactRequestSuccess = (contacts) => ({
  type: types.GET_CONTACTS_REQUEST_SUCCESS,
  payload: contacts,
});

// ERROR ACTIONS
const contactRequestError = (error) => ({
  type: types.GET_CONTACTS_REQUEST_ERROR,
  payload: error,
});

// OTHER ACTIONS
export const raiseError = (error) => ({
  type: types.RAISE_ERROR,
  payload: error,
});
export const changeFilter = (filter) => ({
	type: types.FILTER_CHANGE,
	payload: filter,
});
export const selectcontact = (contact) => ({
  type: types.SELECT_CONTACT,
  payload: contact,
})

export const getContacts = () => dispatch => {
  dispatch(contactRequest());
	return fetch(URLS.GET_CONTACTS_URL)
		.then(response => response.json())
		.then(data => dispatch(contactRequestSuccess(data)))
		.catch(error => dispatch(contactRequestError(error)));
}