import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

const restScreen = ({navigation}) =>{
    return(
        
        <View style={{backgroundColor:"#f5fffa"}}>
            <Text style={styles.logo}>LOGO</Text>
            <View style={{marginBottom:180}}>
            <ScrollView showsVerticalScrollIndicator={false}>
           
            <View style={{marginBottom:40,flexDirection:'row'}}>
                <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:10,marginLeft:10}}></Icons>
            <Text style={styles.rest}>Restaurant</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("tabScreen")}>Back</Text>
            </View>

            <View style={{flexDirection:"row"}}>
            <Text style={styles.rest2}>Restaurant</Text>
        
            <TouchableOpacity  onPress={()=>navigation.navigate("regScreen")}>
            <Text style={{backgroundColor:"#FDC913",
            color:"white",height:38,paddingTop:10,paddingLeft:40,borderRadius:20,width:"100%",paddingRight:40}}>Add</Text>
            </TouchableOpacity>
 
            </View>

          
            <View style={styles.view3}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.reg}>Registered Restaurant</Text>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:25, marginTop:10, color:"#696969",}}>Blocked </Text>
            <Text style={{marginLeft:25, color:"#696969",}}>Restaurant</Text></View>
            </View>

            
            <View style={styles.view1}>
            <TouchableOpacity onPress={()=>navigation.navigate('tabScreen')}>
            <Text style={{marginBottom:10, color:"#696969",}}>ID</Text>
            <Text style={{ color:"#696969",}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969",}}>Name</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.view1}>
            <TouchableOpacity onPress={()=>navigation.navigate('tabScreen')}>
            <Text style={{marginBottom:10, color:"#696969",}}>ID</Text>
            <Text style={{ color:"#696969"}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969"}}>Name</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.view1}>
            <TouchableOpacity onPress={()=>navigation.navigate('tabScreen')}>
            <Text style={{marginBottom:10,  color:"#696969",}}>ID</Text>
            <Text style={{ color:"#696969"}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969",}}>Name</Text>
            </TouchableOpacity>
            </View>

            </View>
            </ScrollView>
            </View>
        </View>
        
        
        
        
    )
}

export default restScreen;


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
        color:"#696969",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        
    },
    rest:{
        fontSize:20,
        marginLeft:75,
        marginTop:30,
        color:"#696969",
    },
    back:{
        fontSize:15,
        marginTop:25,
        marginLeft:60,
        color:"#696969",
    },
    rest2:{
        fontSize:35,
        marginLeft:20,
        marginRight:30,
        color:"#696969",
    
        
    },
   
    view1:{
        paddingLeft:25,
        paddingTop:35,
        marginBottom:20,
        height: 120,
        width: "82%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft:25
    },
    reg:{
        paddingLeft:35,
        paddingTop:10,
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

    },
    view3:{
        marginBottom:60,
        marginLeft:25,
        height: 620,
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
    
  });