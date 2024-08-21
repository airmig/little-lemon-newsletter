import { StyleSheet } from "react-native";
export const documentStyles = StyleSheet.create({
    containerTop: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 600,
        width: 100,
        resizeMode: 'contain'
    },
    containerMiddle: {
        flex: 0.3,
        justifyContent: 'top',
        alignItems: 'center'
    },
    containerBottom: {
        flex: 0.2,
        justifyContent: 'top',
        alignItems: 'center'
    },
    subscribeTop: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subscribeMiddle: {
        flex: 0.7,
        justifyContent: 'top',
        alignItems: 'center'
    },
    inputView: {
        flex: 0.9,
        width: '100%',
        padding: 15,
    },
    buttonView: {
        flex: 0.8,
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    subscribeText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        backgroundColor: '#495e57',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonSubscribe: {
        backgroundColor: '#495e57',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#c4c4c4',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '100%'
    }
})