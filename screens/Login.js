import React, { useState, createRef } from 'react';
import { TextInput, Text, Image, Button, View, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
// import { values } from './global'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux';

const Login = ({ navigation }) => {
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');

    const phoneInputRef = createRef();
    const passInputRef = createRef();


    const handleSubmitPress = () => {
        setErrortext('');
        if (!userPhone) {
            alert('Please fill Phone Number');
            return;
        }
        if (!userPassword) {
            alert('Please fill password');
            return;
        }
        var dataToSend = {
            phone: userPhone,
            pass: userPassword,

        };

        // fetch("http://192.168.1.8:4000/login", {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify(dataToSend),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         if (data.result.status === 200) {
        //             console.log('Login Successful');
        //             console.log(data.result.record._id);

        //             values.isLoginSuccess = true
        //             navigation.navigate('verify', { id: data.result.record._id })


        //         } else {
        //             console.log('Login Unsuccessful');
        //             navigation.navigate('Signup')

        //         }

        //     }).catch((error) => {
        //         console.log(error);
        //     });

    }

    return (
        <View style={styles.inputContainer}>
            <View >
                <Text style={styles.texthead}>Sign In</Text>
            </View>

            <View style={styles.input}>
                <Icon style={styles.icon} name="phone" size={20} color="#FDC913" />
                <TextInput
                    style={styles.place}
                    keyboardType="phone-pad"
                    placeholder="Mobile Number"
                    onChangeText={
                        (userPhone) => setUserPhone(userPhone)
                    }
                    ref={phoneInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        passInputRef.current &&
                        passInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                />
            </View>
            <View style={styles.pad}></View>
            <View style={styles.input} >
                <Icon style={styles.icon} name="lock" size={20} color="#FDC913" />
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
                    secureTextEntry={true}
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
                        onPress={handleSubmitPress}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    inputContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#f5fffa',
        paddingTop: 20,
        paddingBottom: 350
    },

    input: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        flexDirection:'row'
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
        paddingLeft: 15
    },
    padbutton:{
        paddingTop:100
    }

});

