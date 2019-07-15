import {EXPO_CONSOLE_METHOD_NAME} from "expo/build/logs/LogSerialization";

export const GET_CONTACTS = 'GET_CONTACTS';
export const CONTACTS_RECEIVED = 'CONTACTS_RECEIVED';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';

export interface Contact {
    mobile: string
    name: string
}

export interface GetContactsAction {
    type: typeof GET_CONTACTS
}

export interface ReceiveContactsAction {
    type: typeof CONTACTS_RECEIVED
    payload: Contact[]
}

export interface EditContactsAction {
    type: typeof EDIT_CONTACT
    payload: Contact
}

export interface CreateContactsAction {
    type: typeof CREATE_CONTACT
    payload: Contact
}

export function getContacts(): GetContactsAction {
    return {
        type: GET_CONTACTS
    }
}

export function editContact(contact: Contact): EditContactsAction {
    return {
        type: EDIT_CONTACT,
        payload: contact
    }
}

export function createContact(contact: Contact): CreateContactsAction {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

export type ContactTypes = GetContactsAction | ReceiveContactsAction | EditContactsAction | CreateContactsAction;