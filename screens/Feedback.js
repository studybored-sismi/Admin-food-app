import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';


const Feedback = (props) =>{
    
    return(
        <View style={{backgroundColor:"#f5fffa",paddingBottom:200}}>
            <View style={{flexDirection:'row'}}>
             <Icon name="arrow-back" onPress={()=>props.navigation.navigate("settings")} color="#FDC913"
              size={35} style={{marginTop:40,marginLeft:25}}></Icon>
            <Text style={{  marginLeft:85,marginTop:35,color:"#696969",fontSize:props.fontSize,
                fontFamily:"OpenSansSemiBold",marginBottom:40}}>Report</Text>
            {/* <Text style={styles.back} >Back</Text> */}
             </View>
             <View style={styles.view3}>
            <View style={{flexDirection:"row"}}>
            
          
            <Text onPress={()=>props.navigation.navigate("notification")}
            style={{marginLeft:25, marginTop:20, marginRight:32,fontSize:16,
                color:"#696969",fontFamily: 'OpenSansRegular'}}>Notifications </Text>
         <Text style={styles.reg}>Feedback</Text>
        
            </View>

            <View style={{flexDirection:'row'}}>
            <Icon1 name="dot-single" size={30} color="#696969" style={{marginLeft:25}}></Icon1>
            <Text style={{marginTop:5,fontFamily:"OpenSansRegular",
            fontSize:props.fontSize1,color:"#696969"}}>Customer Feedback</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={()=>props.navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:25,borderRadius:20,width:"65%",paddingRight:25,fontFamily: 'OpenSansBold'}}>View</Text>
            </TouchableOpacity>

            

            <TouchableOpacity  onPress={()=>props.navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:24,borderRadius:20,width:"66%",paddingRight:24,fontFamily: 'OpenSansBold'}}>Reply</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <Icon1 name="dot-single" size={30} color="#696969"
            style={{marginLeft:25,marginTop:10}} ></Icon1>
            <Text 
            style={{marginTop:15,fontFamily:"OpenSansRegular",fontSize:props.fontSize1,
            color:"#696969"}}>Customer Complaints</Text>
            </View>
     
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={()=>props.navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:25,borderRadius:20,width:"65%",paddingRight:25,fontFamily: 'OpenSansBold'}}>View</Text>
            </TouchableOpacity>

            

            <TouchableOpacity  onPress={()=>props.navigation.navigate("settings")}>
            <Text style={{backgroundColor:"#FDC913",marginTop:10,marginLeft:45,
            color:"white",height:38,paddingTop:10,
            paddingLeft:24,borderRadius:20,width:"66%",paddingRight:24,fontFamily: 'OpenSansBold'}}>Reply</Text>
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


export default connect(mapStateToProps)(Feedback);




const styles = StyleSheet.create({
    report:{
        marginLeft:95,
        marginTop:35,
        color:"#696969",
        fontFamily:"OpenSansSemiBold",
     
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