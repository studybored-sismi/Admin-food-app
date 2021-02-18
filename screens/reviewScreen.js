import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

const reviewScreen = () =>{
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
       

            <Text style={styles.logo}>LOGO</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
           
            <View style={{marginBottom:7,flexDirection:'row'}}>
                <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:10,marginLeft:10}}></Icons>
            <Text style={styles.rest}>Restaurant</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("tabScreen")}>Back</Text>
            </View>

            <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2} >
                   
            <View style={styles.view3}>
            <View style={{flexDirection:'row', marginTop:30}}>
                    <Icons name="ios-person"  color="mediumvioletred" size={130} style={{paddingLeft:10}}></Icons>
                    <View style={{flexDirection:'column', marginTop:25,marginLeft:15}}>
                    <Text style={{fontSize:25, marginBottom:10, color:"#696969"}}>Username</Text>
                    <Text style={{color:"black", marginBottom:10,paddingLeft:10, color:"#696969"}}>Date:17/02/2021</Text>
                    <Text style={{paddingLeft:10, color:"#696969"}}>Rating:4.5/5</Text>
                    </View>
                    </View>
                    <Text style={{marginLeft:30,marginTop:20,marginBottom:20, fontSize:15, color:"#696969"}}>Reviews</Text>
                    <Text style={styles.view1}>"abcde"</Text>
                    </View>
                    </ImageBackground>
                    </ScrollView>
      
        </View>
    )
}

export default reviewScreen;

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection:'row'
    },
    logo:{
        
        paddingLeft:25,
        paddingTop:35,
        fontSize:30,
        height: 100,
        width: "130%",
        backgroundColor: "#f5fffa",
        //borderRadius: 5,
        elevation: 20,
        color:"#696969",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },

    rest:{
        fontSize:25,
        marginLeft:75,
        marginTop:30,
        marginBottom:10,
        color:"#696969"
    },
    back:{
        fontSize:15,
        marginTop:25,
        marginLeft:60,
        color:"#696969"
    },
    Image2:{
        
        width:"100%",
        height:"50%",
        
    },

    view1:{
        paddingLeft:25,
        paddingTop:35,
        marginBottom:10,
        height: 140,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft:30,
        color:"#696969"
    },
    view3:{
        marginBottom:120,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:18,
        height: 460,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:150
    },
    Image2:{
        
        width:"100%",
        height:"55%",
        resizeMode:"contain"
    }
})