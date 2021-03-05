import React, { useState, useEffect, createRef } from 'react'
import { View, Text, Image, StyleSheet, Keyboard, Alert } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
const SubAdminsDetails = ({route}) => {

    const item = route.params.items

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Admin Details</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SubAdmins')}>
                    <Text style={styles.headertext}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.back}>
                <View style={styles.card}>
                    <Text style={styles.text}>ID</Text>
                    <Text style={styles.colon}>:</Text>
                    <Text style={styles.textdetail}>{item.id}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.colon1}>:</Text>
                    <Text style={styles.textdetail}>{item.name}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Phone</Text>
                    <Text style={styles.colon2}>:</Text>
                    <Text style={styles.textdetail}>912345678</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.colon3}>:</Text>
                    <Text style={styles.textdetail}>abc@gmail.com</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Join date</Text>
                    <Text style={styles.colon4}>:</Text>
                    <Text style={styles.textdetail}>22-1-2021</Text>
                </View>
                <View style={styles.card1}>
                    <Text style={styles.text}>Permissions</Text>
                    <Text style={styles.colon5}>:</Text>
                    <Text style={styles.textdetail}>Menu</Text>
                </View>
                <View>
                    <Text style={styles.textdetail1}>Restaurant</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.inputButton} 
                        onPress={()=>navigation.navigate('EditSubAdmins')}>
                        <Text style={styles.button}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputButton} onPress={() => Alert.alert(
                    "",
                    "Are you sure want to delete?",
                    [
                        { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                    )}>
                        <Text style={styles.button}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(SubAdminsDetails);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        height: '100%',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingBottom: 20,
    },
    headertext: {
        paddingLeft: 170,
        paddingTop: 7,
        color: '#696969',
        fontFamily: 'OpenSansRegular'
    },
    headertxt: {
        fontSize: 20,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    back: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 5,
        borderRadius: 20,
        marginTop: 50,
        paddingTop: 30,
        paddingBottom: 40
    },
    card: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    card1: {
        flexDirection: 'row',
        paddingBottom: 10
    },

    colon: {
        paddingLeft: 130,
        paddingRight: 20
    },
    colon1: {
        paddingLeft: 102,
        paddingRight: 20
    },
    colon2: {
        paddingLeft: 100,
        paddingRight: 20
    },
    colon3: {
        paddingLeft: 106,
        paddingRight: 20
    },
    colon4: {
        paddingLeft: 82,
        paddingRight: 20
    },
    colon5: {
        paddingLeft: 58,
        paddingRight: 22
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40
    },
    text: {
        fontFamily: 'OpenSansSemiBold',
        color: '#696969'
    },

    textdetail: {
        fontFamily: 'OpenSansRegular',
        color: '#696969'
    },
    textdetail1: {
        fontFamily: 'OpenSansRegular',
        color: '#696969',
        left: 172,

    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        width: 100,
        alignSelf: 'center'
    },
    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        alignSelf: 'center',
        fontSize: 15
    },
})