import React,{Component} from 'react';
import {StyleSheet,View, Text,TouchableOpacity, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { ScreenContainer } from 'react-native-screens';
//import MapView from 'react-native-maps';

const height = Dimensions.get('window').height
const Map =() =>{
    return(
        <MapView style={styles.map}
        loadingEnabled={true}
        region={{
            latitude:37.78825,
            longitude: -122.4324,
            latitudeDelta:0.015,
            longitudeDelta: 0.0121
        }}>
        
        </MapView>
    )
}


export default Map;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:34
    },
    map:{
        height
    }
})