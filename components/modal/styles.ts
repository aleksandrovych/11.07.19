import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal: {
        flex: 1,
        width: "90%",
        height: "90%",
        alignSelf: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1000,
        marginTop: '5%',
        borderRadius: 20,
        opacity: 0.9,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    submit: {
        maxHeight: 60,
    },
    submitText: {
        color: '#E27D60',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textField: {
        color: '#E27D60',
        fontSize: 16,
        alignSelf: 'center',
        borderColor: "#85DCB0",
        borderWidth: 1,
        height: 32,
        minWidth: "80%",
        textAlign: 'center',
        borderStyle: 'dotted',
    },
    container1: {
        marginTop: '70%',
        minHeight: 50,
    },
    container2: {
        marginTop: '7%',
        minHeight: 50,
    },
    prompt: {
        color: '#E27D60',
        marginBottom: 6,
    },
})