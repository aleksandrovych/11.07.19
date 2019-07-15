import {NavigationScreenProp, NavigationState} from "react-navigation";
import {Contact, GetContactsAction} from "../../redux/actions";


export interface Props {
    onSubmit: (model: Contact) => void;
    name: string;
    mobile: string;
}