import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign'

const regScreen = ({navigation}) =>{

    const [name,setName]= useState();
    const[email,setEmail] = useState();
    const [phone,setPhone]= useState();
    const [address, setAddress] = useState();
    const[delivery,setDelivery] = useState();
    const[licence,setLicence]= useState();
    return(
        
        <View style={{backgroundColor:"#f5fffa",paddingBottom:60}}>
            <Text style={styles.logo}>LOGO</Text>

            <View style={{paddingBottom:140}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.res}>Restaurant</Text>
            <Text style={{marginTop:25,color:"#696969",}} onPress={()=>navigation.navigate("restScreen")}>Back</Text>
            </View>

            <Text style={{marginLeft:125, fontSize:20,color:"#696969",}}>Registration</Text>


            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Restaurant Name</Text>
            <TextInput style={styles.line} value={name} onChangeText={(text)=>setName(text)} placeholder="" />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}} >Restaurant Email</Text>
            <TextInput style={styles.line} value={email}  onChangeText={(text)=>setEmail(text)} placeholder="" />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Restaurant Phone</Text>
            <TextInput style={styles.line} value={phone} onChangeText={(text)=>setPhone(text)} keyboardType="number-pad" placeholder="" />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Restaurant Address</Text>
            <TextInput style={styles.line} value={address} onChangeText={(text)=>setAddress(text)} placeholder="" />

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Delivery Mode</Text>
            <Icon style={{marginLeft:180,marginTop:20,color:"#696969",}} name="caretdown" size={17} color="grey" />
            </View>
            <TextInput style={styles.line} value={delivery} onChangeText={(text)=>setDelivery(text)} placeholder="" />
           
        
            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Licence Number</Text>
            <TextInput style={styles.line} value={licence}  onChangeText={(text)=>setLicence(text)} keyboardType="number-pad" placeholder="" />
            
            <Text style={{marginLeft:35,marginTop:20,color:"#696969",}}>Category</Text>

            <View style={styles.categ}>
            <View style={{marginBottom:10,flexDirection:'row'}}>
            <Text style={{marginRight:130,color:"#696969",}}>Asian</Text>
            <Icons name="ios-tablet-landscape-outline" style={{color:"black"}}></Icons>
            </View>
            <View style={{marginBottom:10,flexDirection:'row'}}>
            <Text style={{marginRight:127,color:"#696969",}}>Italian</Text>
            <Icons name="ios-tablet-landscape-outline" style={{color:"black",}}></Icons>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:88,color:"#696969",}}>North Indian</Text>
            <Icons name="ios-tablet-landscape-outline" style={{color:"black"}}></Icons>
            </View>
            </View>

            
 <TouchableOpacity style={{width:"100%",}} onPress={()=>navigation.navigate("restScreen")}>
            <Text style={{backgroundColor:"#FDC913", marginLeft:60,fontSize:15,fontWeight:"bold",marginBottom:40,
            color:"white",height:"30%",paddingTop:10,paddingLeft:100,borderRadius:20,width:"70%",paddingRight:40}}>Submit</Text>
            </TouchableOpacity>
           
            </ScrollView>
            </View>
        </View>
       
    )
}

export default regScreen;

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
        color:"#696969",
    },
    res:{
        marginLeft:130,
        marginRight:80,
        fontSize:20,
        marginTop:20,
        color:"#696969",

    },
    categ:{
        paddingLeft:25,
        paddingTop:15,
        marginBottom:20,
        height: 110,
        width: "65%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft:65,
        marginTop:20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 10,
        paddingRight: 20,
        // paddingBottom:20
        flexDirection: 'row',
        marginLeft:35,
        marginRight:35

    },
})