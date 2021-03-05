import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Image, Alert } from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';


const settings = ({ navigation }) => {
    const { colors } = useTheme();
    const onLogout = () => {
        Alert.alert(
            '',
            'Are you sure want to Logout?',
            [
                { text: 'LOGOUT' },
                { text: 'CANCEL', style: 'CANCEL' },
            ],
            {
                cancelable: false
            }
        );
    }
    return (
        <View >
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 200 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icons name="arrow-back" onPress={() => navigation.navigate("Dashboard")} color="#FDC913" size={35} style={{ marginTop: 10, marginLeft: 10 }}></Icons>
                    <Text style={styles.settings}>Settings</Text>

                </View>

                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => navigation.navigate("SubAdmins")}>
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold", color: "#696969",
                                fontSize:18,alignSelf:'center'
                            }}>Sub Admins</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => navigation.navigate("notification")}>
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold", color: "#696969",
                                fontSize:18,alignSelf:'center'
                            }}>Report</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => navigation.navigate("contact")}>
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold", color: "#696969",
                                fontSize:18,alignSelf:'center'
                            }}>Contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold", color: "#696969",
                                fontSize:18,alignSelf:'center'
                            }}>Mode</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => navigation.navigate("fontSize")}>
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold", color: "#696969",
                                fontSize:18,alignSelf:'center'
                            }}>Font size</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view5}>
                    <TouchableOpacity onPress={onLogout} >
                        <Text
                            style={{
                                fontFamily: "OpenSansSemiBold",
                                color: "#696969", fontSize:18, alignSelf:'center'
                            }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default settings;


const styles = StyleSheet.create({
    settings: {
        marginLeft: 95,
        marginTop: 10,
        color: "#696969",
        fontFamily: "OpenSansBold",
        fontSize: 30,
        marginBottom: 50
    },
    back: {
        fontSize: 20,
        marginTop: 50,
        marginLeft: 90,
        color: "#696969",
        fontFamily: "OpenSansRegular"

    },
    settings1: {
        marginLeft: 55,
        marginTop: 30,
        color: "#696969",
        fontFamily: "OpenSansBold",
        fontSize: 20,
        marginBottom: 30
    },
    view4: {
        marginBottom: 30,
        marginLeft: 45,
        height: 50,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding:10
    },
    view5: {
        marginBottom: 50,
        marginLeft: 45,
        height: 50,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding:10,

    },
})