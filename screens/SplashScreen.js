import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Button, StatusBar, Image } from 'react-native';

import { ActivityIndicator } from 'react-native';

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 2000);
    }

    render() {
        return (
            <View >
                <Image source={require('../assets/icon.png')}
                    style={{ width: '100%', height: '100%' }} />
                {/* <ActivityIndicator size="large" color='#00BFFF'
                    style={{ margin: 10 }} /> */}
            </View>
        );
    };
}  