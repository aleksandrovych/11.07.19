import React from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { Props } from './types';
import styles from './styles';
import {Contact} from "../../redux/actions";

const Modal = (props: Props) => (
    <Formik
        initialValues={{ name: props.name, mobile: props.mobile }}
        onSubmit={  (values: Contact) => props.onSubmit(values)}
    >
        {props => (
            <View style={styles.modal}>
                <View  style={styles.container1}>
                <Text style={styles.prompt}>name: </Text>
                <TextInput
                    placeholder={'Enter name here'}
                    style={styles.textField}
                    onChangeText={props.handleChange('name')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.name}
                />
                </View>
                <View  style={styles.container2}>
                    <Text style={styles.prompt}>mobile: </Text>
                    <TextInput
                        placeholder={'Enter mobile here'}
                        style={styles.textField}
                        onChangeText={props.handleChange('mobile')}
                        onBlur={props.handleBlur('mobile')}
                        value={props.values.mobile}
                    />
                </View>
                <TouchableOpacity style={styles.submit} onPress={props.handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )}
    </Formik>
);

export default Modal;