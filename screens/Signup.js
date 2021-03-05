import React, { useState, createRef } from 'react';
import { TextInput, Text, View, StyleSheet, Button, Keyboard, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Fontisto'
import { connect } from 'react-redux';
const Signup = ({ navigation }) => {

    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');


    const phoneInputRef = createRef();
    const emailInputRef = createRef();
    const nameInputRef = createRef();
    const passInputRef = createRef();
    
    const handleSubmitButton = () => {
        setErrortext('');
        if (!userName) {
            alert('Please fill Name');
            return;
        }
        if (!userPhone) {
            alert('Please fill Phone Number');
            return;
        }
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }

        if (!userPassword) {
            alert('Please fill Password');
            return;
        }
        var dataToSend = {
            phone: userPhone,
            email: userEmail,
            name: userName,
            pass: userPassword,

        };

        // fetch("http://192.168.1.8:4000/register", {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify(dataToSend),
        // })
        //     .then((response) => {
        //         console.log(response);
        //         if (response.status === 200) {

        //             console.log(
        //                 'Registration Successful. Please Login to proceed'

        //             );
        //             navigation.navigate('Login')
        //         } else {
        //             setErrortext('Registration Unsuccessful');
        //         }

        //     }).catch((error) => {
        //         console.log(error);
        //     });

    }

    return (
        <ScrollView style={styles.inputContainer}>
            <View>
                <Text style={styles.texthead} >Create Account</Text>
            </View>

            <View style={styles.input}>
                <Icon style={styles.icon} name="person-outline" size={20} color="#FDC913" />
                <TextInput
                    style={styles.place}
                    placeholder="Full Name"
                    keyboardType="default"
                    onChangeText={(userName) => setUserName(userName)}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={nameInputRef}
                    onSubmitEditing={() =>
                        phoneInputRef.current &&
                        phoneInputRef.current.focus()
                    }

                    blurOnSubmit={false} />
            </View>
            <View style={styles.pad}></View>
            <View style={styles.input} >
                <Icon1 style={styles.icon} name="phone" size={20} color="#FDC913" />
                <TextInput
                    style={styles.place}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    onChangeText={
                        (userPhone) => setUserPhone(userPhone)
                    }
                    ref={phoneInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        emailInputRef.current &&
                        emailInputRef.current.focus()
                    }
                    blurOnSubmit={false} />
            </View>
            <View style={styles.pad}></View>
            <View style={styles.input} >
                <Icon2 style={styles.icon} name="email" size={20} color="#FDC913" />
                <TextInput
                    style={styles.place}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize='none'
                    onChangeText={
                        (userEmail) => setUserEmail(userEmail)
                    }
                    ref={emailInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        passInputRef.current &&
                        passInputRef.current.focus()
                    }
                    blurOnSubmit={false} />
            </View>
            <View style={styles.pad}></View>
            <View style={styles.input} >
                <Icon1 style={styles.icon} name="lock" size={20} color="#FDC913" />
                <TextInput
                    style={styles.place}
                    placeholder="Password"
                    keyboardType="default"
                    maxLength={6}
                    autoCapitalize='none'
                    onChangeText={
                        (userPassword) => setUserPassword(userPassword)
                    }
                    ref={passInputRef}
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false} />
            </View>

            {errortext != '' ? (
                <Text style={styles.errorTextStyle}>
                    {errortext}
                </Text>
            ) : null}
            <View style={styles.padbutton}>
                <TouchableOpacity style={styles.inputButton}>
                    <Text
                        style={styles.button}
                        onPress={handleSubmitButton}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Signup);


const styles = StyleSheet.create({
    inputContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#f5fffa',
        paddingTop: 20,
        paddingBottom: 250
    },

    input: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        flexDirection: 'row'

    },
    place: {
        paddingLeft: 20,
        fontFamily:'OpenSansRegular',

    },
    inputText: {
        paddingTop: 30,
        flexDirection: 'row',
    },
    inputButton: {
        paddingTop: 15,
        backgroundColor: '#FDC913',
        paddingBottom:15,
        borderRadius:100
        
    },
    text: {
        fontSize: 13,
    },
    text1: {
        // fontSize:13,
        color: '#6495ed',
    },
    button: {
        fontFamily:'OpenSansRegular',
        color: 'white',
        alignSelf: 'center'
    },
    pad: {
        paddingTop: 20
    },
    texthead: {
        fontFamily:'OpenSansBold',
        paddingBottom: 100,
        paddingTop: 100,
        alignSelf: 'center',
        fontSize: 25,
        color:'#FDC913'
    },
    icon: {
        paddingLeft: 15,
        paddingTop: 3
    },
    padbutton:{
        paddingTop:100
    }

});

