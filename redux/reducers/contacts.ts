import {Contact, ContactTypes, CONTACTS_RECEIVED, GET_CONTACTS, EDIT_CONTACT, CREATE_CONTACT} from "../actions";
import find from 'lodash/find';

const initialState: Contact[] = [];

const reducer = function contactsReducer(
    state = initialState,
    action: ContactTypes
): Contact[] {
    switch (action.type) {
        case GET_CONTACTS:
            return [];
        case CONTACTS_RECEIVED:
            console.log("CONTACTS_RECEIVED");
            if (state.length > 0) {
                // Only because have fake API
                return [...state];
            }

            return [...action.payload];
        case EDIT_CONTACT:
            console.log('EDIT_CONTACT');
            const byName: Contact = find(state, (contact: Contact) => contact.name == action.payload.name);
            const byMobile: Contact = find(state, (contact: Contact) => contact.mobile == action.payload.mobile);

            if (byName) {
                byName.mobile = action.payload.mobile;
            }

            if (byMobile) {
                byMobile.name = action.payload.name;
            }
            return [...state];
        case CREATE_CONTACT:
            console.log("CREATE_CONTACT");
            const contact: Contact = action.payload;
            state.push(contact);
            return [...state]
        default:
            console.log("default");
            return state
    }
};

export default reducer;