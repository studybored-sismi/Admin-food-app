import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';


const Feedback = ({navigation}) =>{
    
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
            <View style={{flexDirection:'row'}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.report}>Report</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryBoy")}>Back</Text>
             </View>
             <View style={styles.view3}>
            <View style={{flexDirection:"row"}}>
            
          
            <Text onPress={()=>navigation.navigate("notification")}
            style={{marginLeft:25, marginTop:20, marginRight:32,fontSize:16,
                color:"#696969",fontFamily: 'OpenSansRegular'}}>Notifications </Text>
         <Text style={styles.reg}>Feedback</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Icon1 name="dot-single" size={30} color="#696969" style={{marginLeft:25}}></Icon1>
            <Text style={{marginTop:5,fontFamily:"OpenSansRegular",color:"#696969"}}>Customer Feedback</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={()=>navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:25,borderRadius:20,width:"65%",paddingRight:25,fontFamily: 'OpenSansBold'}}>View</Text>
            </TouchableOpacity>

            

            <TouchableOpacity  onPress={()=>navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:24,borderRadius:20,width:"66%",paddingRight:24,fontFamily: 'OpenSansBold'}}>Reply</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <Icon1 name="dot-single" size={30} color="#696969"
            style={{marginLeft:25,marginTop:10}} ></Icon1>
            <Text 
            style={{marginTop:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>Customer Complaints</Text>
            </View>
     
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={()=>navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:25,borderRadius:20,width:"65%",paddingRight:25,fontFamily: 'OpenSansBold'}}>View</Text>
            </TouchableOpacity>

            

            <TouchableOpacity  onPress={()=>navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:24,borderRadius:20,width:"66%",paddingRight:24,fontFamily: 'OpenSansBold'}}>Reply</Text>
            </TouchableOpacity>
            </View>

            </View>

        </View>
    )

}


export default Feedback;

const styles = StyleSheet.create({
    report:{
        marginLeft:95,
        marginTop:50,
        color:"#696969",
        fontFamily:"OpenSansSemiBold",
        fontSize:20,
        marginBottom:40
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:90,
        color:"#696969",
        fontFamily:"OpenSansRegular"

    },
    reg:{
        paddingLeft:45,
        paddingTop:20,
        fontSize:15,
        height: 60,
        width: "50%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginBottom:50,
        color:"#696969",
        fontFamily: 'OpenSansRegular'

    },
    view3:{
        marginBottom:60,
        marginLeft:25,
        height: 420,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:20
    }
})