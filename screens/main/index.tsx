import React from 'react';
import {View, TouchableOpacity, Text, FlatList, Button} from "react-native";
import { SearchBar } from 'react-native-elements';
import { Props, State, NavigationParams } from './types';
import styles from './styles'
import { connect } from "react-redux";
import {getContacts, ContactTypes, Contact, createContact} from "../../redux/actions";
import contacts from "../../redux/sagas/contacts";
import filter from 'lodash/filter'
import lowerCase from 'lodash/lowerCase';
import Modal from "../../components/modal";

class MainScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {searchQuery: "", showModal: false};

        this.props.navigation.setParams({onCreate : this.onCreate});
    }

    componentDidMount(): void {
        this.props.getContacts();
    }

    onCreate = () => {
        this.setState({showModal: true});
    }

    onSubmit = (model: Contact) => {
        if(model.name.length > 0 && model.mobile.length > 0) {
            this.props.createContact(model);
        }

        this.setState({showModal: false});
    }

    public static navigationOptions = ({navigation}) => {
        return {
            title: 'Main Screen',
            headerStyle: {
                backgroundColor: '#E27D60',
            },
            headerTintColor: '#FFFFFF',
            headerRight: (
                <Button
                    onPress={() => (navigation.state.params as NavigationParams).onCreate()}
                    title="Create"
                    color="#ffffff"
                />)
        }

    };

    filteredContacts = (contacts: Contact[], query?: string): Contact[] => {

        if (!!query && query.length > 0) {
            console.log("here!!");
            return filter(contacts, (contact: Contact) => {
                return lowerCase(contact.name).includes(lowerCase(this.state.searchQuery)) ||
                    lowerCase(contact.mobile).includes(lowerCase(this.state.searchQuery))
            })
        }

        return contacts;
    }

    navigateToDetail = (model: Contact) => {
        this.props.navigation.navigate('Detail', {model: model})
    }

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={ (text) => { this.setState({searchQuery: text})}}
                autoCorrect={false}
                value={this.state.searchQuery}
                containerStyle={styles.searchBar}
            />
        );
    };

    renderItem = ( object: any) => {
        const model = object.item;
        return ( <TouchableOpacity key={model.mobile} onPress={() => { this.navigateToDetail(model)}}>
            <View>
            <Text style={styles.text}>{ '🗿 ' + model.name}</Text>
            <Text style={styles.text}>{ '📱 ' +  model.mobile}</Text>
            <View style={styles.separator}/>
        </View>
        </TouchableOpacity>)
    }

    render() {
        return (<View style={styles.container}>
            {!!this.state.showModal && <Modal name={""} mobile={""} onSubmit={this.onSubmit}/> }
            {this.renderHeader()}
            <FlatList
                data={this.filteredContacts(this.props.contacts, this.state.searchQuery)}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}/>
        </View>)
    }
}

const mapDispatchToProps = {
    getContacts,
    createContact
};

const mapStateToProps = (state: any) => ({
    contacts: state
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);
