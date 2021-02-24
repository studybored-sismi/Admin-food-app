import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image,Alert} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';


const settings = ({navigation}) =>{
    const {colors} = useTheme();
    const onLogout = () =>{
        Alert.alert(
            ' ',
            'Are you sure want to Logout',
            [
              {text: 'LOGOUT'},
              {text: 'CANCEL', style: 'CANCEL'},
            ],
            { 
              cancelable: false
            }
          );
    }
    return(
        <View >
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#f5fffa"}}>
            <View style={{flexDirection:'row'}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.settings}>Settings</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryBoy")}>Back</Text>
             </View>

             <Text style={styles.settings1}>Settings</Text>

             <View style={styles.view4}>
                 <Text 
                 style={{fontFamily:"OpenSansSemiBold",color:"#696969",
                 paddingRight:30}}>Sub Admins</Text>
             </View>

             <View style={styles.view4}>
                 <Text onPress={()=>navigation.navigate("Feedback")}
                 style={{fontFamily:"OpenSansSemiBold",color:"#696969",
                 paddingLeft:15}}>Report</Text>
             </View>

             <View style={styles.view4}>
                 <Text onPress={()=>navigation.navigate("contact")}
                  style={{fontFamily:"OpenSansSemiBold",color:"#696969",
                 paddingLeft:10}}>Contact</Text>
             </View>

             <View style={styles.view4}>
                 <Text  onPress={()=>navigation.navigate("Mode")}
                 style={{fontFamily:"OpenSansSemiBold",color:"#696969",
                 paddingLeft:15}}>Mode</Text>
             </View>

             <View style={styles.view4}>
                 <Text onPress={()=>navigation.navigate("fontSize")}
                 style={{fontFamily:"OpenSansSemiBold",color:"#696969",
                 paddingLeft:10}}>Font size</Text>
             </View>

             <View style={styles.view4}>
                 <Text onPress={onLogout} 
                 style={{fontFamily:"OpenSansSemiBold",
                 color:"#696969",paddingLeft:15}}>Logout</Text>
             </View>
             </ScrollView>
        </View>
    )
}

export default settings;


const styles = StyleSheet.create({
    settings:{
        marginLeft:95,
        marginTop:50,
        color:"#696969",
        fontFamily:"OpenSansSemiBold",
        fontSize:20
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:90,
        color:"#696969",
        fontFamily:"OpenSansRegular"

    },
    settings1:{
        marginLeft:55,
        marginTop:30,
        color:"#696969",
        fontFamily:"OpenSansBold",
        fontSize:20,
        marginBottom:30
    },
    view4:{
        marginBottom:30,
        marginLeft:45,
        height: 50,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft:100,
        paddingTop:15
    },
})