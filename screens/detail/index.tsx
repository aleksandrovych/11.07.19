import React from 'react';
import { View, Text, Button } from "react-native";
import styles from './styles';
import { Props, NavigationParams, State } from './types';
import Modal from '../../components/modal'
import { NavigationScreenProp, NavigationState} from 'react-navigation';
import {Contact, editContact} from "../../redux/actions";
import {connect} from "react-redux";

class ContactDetailScreen extends React.Component<Props, State> {
    public static navigationOptions = ({ navigation }) => {
        return {
            title: 'Detail Screen',
            headerStyle: {
                backgroundColor: '#E27D60',
            },
            headerTintColor: '#FFFFFF',
            headerRight: (
                <Button
                    onPress={() => (navigation.state.params as NavigationParams).onEdit()}
                    title="Edit"
                    color="#ffffff"
                />)
        }

    };

    constructor(props: Props) {
        super(props);

        this.state = {showModal: false};
        this.props.navigation.state.params.onEdit = this.onEdit;
    }

    onEdit = () => {
        this.setState({showModal: true});
    }

    onSubmit = (model: Contact) => {
        this.props.navigation.setParams({model});

        this.setState({showModal: false});

        if (model.name != "" && model.mobile != "") {
            this.props.editContact(model);
        }
    }

    render() {
        const model  = this.props.navigation.getParam('model');
        return (<View style={styles.container}>
            {!!this.state.showModal && <Modal name={model.name} mobile={model.mobile} onSubmit={this.onSubmit}/> }
            <Text style={styles.avatar}>{'👤'}</Text>
            <Text style={styles.text}>{model.name}</Text>
            <Text style={styles.text}>{'📱 ' + model.mobile}</Text>
        </View>)
    }
}

const mapDispatchToProps = {
    editContact
};

export default connect(
    null,
    mapDispatchToProps
)(ContactDetailScreen);