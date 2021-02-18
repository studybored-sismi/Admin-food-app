import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground,Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

const foodScreen = () =>{
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
       
      
            <Text style={styles.logo}>LOGO</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
       
            <View style={{marginBottom:7,flexDirection:'row'}}>
                <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:10,marginLeft:10}}></Icons>
            <Text style={styles.rest}>Restaurant</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("tabScreen")}>Back</Text>
            </View>

          <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2}>
                    

         <View style={styles.view3}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969"}}>Food item</Text>
               

                <Text style={{marginLeft:85, marginTop:5,color:"#696969"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969"}}>Price</Text>

                <Text style={{marginLeft:115,color:"#696969"}}>Price</Text>
            </View>
            

            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969"}}>Food item</Text>
               

                <Text style={{marginLeft:80, marginTop:5,color:"#696969"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969"}}>Price</Text>

                <Text style={{marginLeft:115,color:"#696969"}}>Price</Text>
            </View>


            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/berger.jpg')} style={styles.Image} >
                    </Image>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969"}}>Food item</Text>
               

                <Text style={{marginLeft:85, marginTop:5,color:"#696969"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969"}}>Price</Text>

                <Text style={{marginLeft:115, marginBottom:25,color:"#696969"}}>Price</Text>
            </View>
            </View>

            
            
            </ImageBackground>
   
        </ScrollView>
        </View>
    )
}

export default foodScreen;

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
        width: "100%",
        backgroundColor: "#f5fffa",
        //borderRadius: 5,
        elevation: 20,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"#696969"
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
    Image: {

        marginLeft: 30,
        marginTop: 20,
        //backgroundColor: "white",
        height: 100,
        width: "35%",
        //backgroundColor: "white",
        borderRadius: 6,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginRight: 5

    },
    Image2:{
        
        width:"100%",
        height:"50%",
        resizeMode:"contain"
    },
    view3:{
        marginBottom:120,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:18,
        height: 620,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:120
    }
})