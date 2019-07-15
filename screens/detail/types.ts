import {NavigationScreenProp, NavigationState} from "react-navigation";
import {Contact, GetContactsAction} from "../../redux/actions";
import contacts from "../../redux/sagas/contacts";

export interface NavigationParams {
    model: Contact;
    onEdit: () => void;
}

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    contacts: Contact[];
    getContacts: () => GetContactsAction;
    editContact: (contact: Contact) => void;
}

export interface State {
    showModal: boolean;
}