import {
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import {Contact, GetContactsAction} from "../../redux/actions";

export interface NavigationParams {
    onCreate: () => void;
}

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    contacts: Contact[];
    getContacts: () => GetContactsAction;
    createContact: (model: Contact) => void;
}

export interface State {
    searchQuery: string;
    showModal: boolean;
}
