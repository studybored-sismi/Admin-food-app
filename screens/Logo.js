import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.logo}>
                    <Text style={styles.text}>LOGO</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 430
    },
    text: {
        fontSize: 20,
        fontFamily:'OpenSansBold',
        borderColor: 'white',
        borderBottomColor: 'grey',
        paddingLeft: 34,
        paddingTop: 30,
        paddingBottom: 15,
        elevation: 3,
        color: '#696969'
    }
})