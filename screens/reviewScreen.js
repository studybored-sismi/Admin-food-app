import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
const reviewScreen = ({navigation}) =>{
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
       

            <ScrollView showsVerticalScrollIndicator={false}>
           
            <View style={{marginBottom:7,flexDirection:'row'}}>
               
            <Text style={styles.rest}>Restaurant</Text>
         
            </View>

            <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2} >
                   
            <View style={styles.view3}>
            <View style={{flexDirection:'row', marginTop:30}}>
                    <Icons name="ios-person"  color="mediumvioletred" size={130} style={{paddingLeft:10}}></Icons>
                    <View style={{flexDirection:'column', marginTop:25,marginLeft:15}}>
                    <Text style={{fontSize:25, marginBottom:10, color:"#696969",fontFamily:"OpenSansRegular"}}>Username</Text>
                    <Text style={{color:"black", marginBottom:10,paddingLeft:10, color:"#696969",fontFamily:"OpenSansRegular"}}>Date:17/02/2021</Text>
                    <Text style={{paddingLeft:10, color:"#696969",fontFamily:"OpenSansRegular"}}>Rating:4.5/5</Text>
                    </View>
                    </View>
                    <Text style={{marginLeft:30,marginTop:20,marginBottom:20, fontSize:15, color:"#696969"}}>Reviews</Text>
                   
                   <View style={styles.view2}>
                   <Text style={{color:"#696969",fontFamily:"OpenSansRegular"}}>"abcde"</Text>
                   <TouchableOpacity>
                                <Text style={{
                                    backgroundColor: "#FDC913", fontFamily:'OpenSansSemiBold', marginLeft: 80,
                                     fontSize: 15, marginTop:50,
                                    color: "white", height: "40%", 
                                    paddingTop: 8, paddingLeft: 35, borderRadius: 20, width: 125, paddingRight: 15,
                                }}>Submit</Text>
                            </TouchableOpacity>

                    
                    </View>
                    </View>
                    </ImageBackground>
                    </ScrollView>
      
        </View>
    )
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(reviewScreen);


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
        marginTop:55,
        marginLeft:50,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    Image2:{
        
        width:"100%",
        height:"50%",
        
    },

    view2:{
        paddingLeft:25,
        paddingTop:35,
        marginBottom:10,
        height: 160,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft:32,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    view1:{
        paddingLeft:25,
        paddingTop:35,
        marginBottom:10,
     
        marginLeft:32,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    view3:{
        marginBottom:20,
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