import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';
import fontSize from './fontSize';


const contact = (props) =>{
  
    return(
        <View style={{backgroundColor:"#f5fffa",paddingBottom:200}}>
            <View style={{flexDirection:'row'}}>
             <Icons name="arrow-back" onPress={()=>navigation.navigate("settings")} color="#FDC913" size={35} style={{marginTop:40,marginLeft:15}}></Icons>
            <Text style={{fontSize:props.fontSize, marginLeft:95,
                 marginTop:35, color:"#696969",fontFamily:"OpenSansSemiBold",}}>Contact</Text>
            {/* <Text style={styles.back}>Back</Text> */}
             </View>

             <View style={styles.view4}>
             <Text style={{fontSize:props.fontSize, marginLeft:0,
                        marginTop:30,color:"#696969",fontFamily:"OpenSansSemiBold",
                        marginBottom:20}}>Contact Us</Text>

             <View style={{flexDirection:'row'}}>
             <Text style={{marginLeft:15,
        marginBottom:5,
        fontFamily:"OpenSansRegular",
        color:"#696969",fontSize:props.fontSize1}}>Email</Text>

             <Text style={{marginLeft:15,
        marginBottom:5,
        fontFamily:"OpenSansRegular",
        color:"#696969",fontSize:props.fontSize1}}>:</Text>
             <Text style={{fontSize:props.fontSize1,marginLeft:15,
                        marginBottom:5,fontFamily:"OpenSansRegular",
                        color:"#696969",}}>foodappadmin@gmail.com</Text>
             </View>

             <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:props.fontSize1,marginLeft:15,marginBottom:5,
                    fontFamily:"OpenSansRegular",color:"#696969",}}>Phone</Text>

                 <Text style={{ marginLeft:9,
                                marginBottom:5,fontSize:props.fontSize1,
                                fontFamily:"OpenSansRegular",
                                color:"#696969",}}>:</Text>

                 <Text style={{fontSize:props.fontSize1,marginLeft:15,marginBottom:5,
                            fontFamily:"OpenSansRegular",
                                color:"#696969",}}>+91 9876543210</Text>
             </View>
             </View>
        </View>
    )

}


const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(contact);

const styles = StyleSheet.create({
    contact:{
        marginLeft:95,
        marginTop:35,
        color:"#696969",
        fontFamily:"OpenSansSemiBold",
        fontSize:30
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