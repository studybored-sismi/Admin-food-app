import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';


const contact = ({navigation}) =>{
  
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
            <View style={{flexDirection:'row'}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.contact}>Contact</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryBoy")}>Back</Text>
             </View>

             <View style={styles.view4}>
             <Text style={styles.contact1}>Contact Us</Text>

             <View style={{flexDirection:'row'}}>
             <Text style={styles.text1}>Email</Text>
             <Text style={styles.text1}>:</Text>
             <Text style={styles.text1}>foodappadmin@gmail.com</Text>
             </View>

             <View style={{flexDirection:'row'}}>
                 <Text style={styles.text1}>Phone</Text>
                 <Text style={{ marginLeft:9,
                                marginBottom:5,
                                fontFamily:"OpenSansRegular",
                                color:"#696969",}}>:</Text>
                 <Text style={styles.text1}>+91 9876543210</Text>
             </View>
             </View>
        </View>
    )

}


export default contact;

const styles = StyleSheet.create({
    contact:{
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

    view4:{
        marginBottom:290,
        marginLeft:27,
        height: 250,
        width: "85%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft:20,
        //paddingTop:15,
        marginTop:45
    },
    contact1:{
        marginLeft:0,
        marginTop:30,
        color:"#696969",
        fontFamily:"OpenSansSemiBold",
        fontSize:24,
        marginBottom:20
    },
    text1:{
        marginLeft:15,
        marginBottom:5,
        fontFamily:"OpenSansRegular",
        color:"#696969",
        
    },
    text2:{
        marginLeft:15,
        marginBottom:5,
        fontFamily:"OpenSansRegular",
        color:"#696969"
    }
})