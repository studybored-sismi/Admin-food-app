import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground,Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

const foodScreen = ({navigation}) =>{
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
       
            <ScrollView showsVerticalScrollIndicator={false}>
       
            <View style={{marginBottom:7,flexDirection:'row'}}>
              
            <Text style={styles.rest}>Restaurant</Text>
           
            </View>

          <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2}>
                    

         <View style={styles.view3}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}}>Food item</Text>
               

                <Text style={{marginLeft:85, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>

                <Text style={{marginLeft:115,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>
            </View>
            

            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}}>Food item</Text>
               

                <Text style={{marginLeft:80, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>

                <Text style={{marginLeft:115,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>
            </View>


            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
                    <Image source={require('../assets/burger1.jpg')} style={styles.Image} >
                    </Image>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:55, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}}>Food item</Text>
               

                <Text style={{marginLeft:85, marginTop:5,color:"#696969",fontFamily:"OpenSansRegular"}} >Food item</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:70,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>

                <Text style={{marginLeft:115, marginBottom:25,color:"#696969",fontFamily:"OpenSansRegular"}}>Price</Text>
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
    
        
    
    rest:{
        fontSize:30,
        marginLeft:100,
        marginTop:50,
        marginBottom:10,
        color:"#696969",
        fontFamily:"OpenSansSemiBold"
    },
    back:{
        fontSize:15,
        marginTop:75,
        marginLeft:50,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    Image: {

        marginLeft: 30,
        marginTop: 20,
        //backgroundColor: "white",
        height: 100,
        width: "35%",
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
        marginBottom:20,
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