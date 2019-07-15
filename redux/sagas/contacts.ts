 import jsonData from "../../assets/mock.json";
import { put, all, fork, takeEvery, select } from "redux-saga/effects";
import {
    GET_CONTACTS,
    CONTACTS_RECEIVED,
    GetContactsAction,
    ReceiveContactsAction,
    EditContactsAction,
    EDIT_CONTACT,
    Contact,
    CREATE_CONTACT,
    CreateContactsAction, getContacts,
} from "../actions";
import find from 'lodash/find';
import cloneDeep from 'lodash/cloneDeep';


function* getContactsWatcher() {
    yield takeEvery(GET_CONTACTS, fetchContacts);
}

 /*
  function* editContactWatcher() {
      yield takeEvery(EDIT_CONTACT, editContact);
  }

  function* createContactWatcher() {
      yield takeEvery(CREATE_CONTACT, createContact);
  }

  function* createContact(action: CreateContactsAction) {
     // do some real work
     // let someAction = ...
      yield put(someAction);
  }

  function* editContact(action: EditContactsAction) {
    // do some real work
    // let someAction = ...
    yield put(someAction);
  }

 */

function* fetchContacts() {
    // Real API call should be here
    const action = {} as ReceiveContactsAction;
    action.type = CONTACTS_RECEIVED;
    action.payload = jsonData['contacts'];
    yield put(action);
}

export default function* rootSaga() {
    yield all([
        fork(getContactsWatcher),
        /*fork(editContactWatcher),*/
        /*fork(createContactWatcher),*/
    ]);
}
