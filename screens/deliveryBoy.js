import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

const deliveryBoy=({navigation})=>{
    const {colors} = useTheme();
    const [id,setId] =useState();
    const [image,setImage] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [occupation,setOccupation] = useState();
    const [job,setJob] =useState();
    const [vehicle,setVehicle] = useState();
    const [commission,setCommission] = useState();
    const [revenu,setRevenu] = useState();
    const [status,setStatus] = useState();
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
            <ScrollView>
            <View style={{flexDirection:"row"}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.boy}>Delivery Boy</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryRegScreen")}>Back</Text></View>

            <View style={{flexDirection:'row'}}>
            <Text style={styles.boy2}>Delivery Boy</Text>

            <TouchableOpacity  onPress={()=>navigation.navigate("deliveryRegScreen")}>
            <Text style={{backgroundColor:"#FDC913", color:"white",height:38,paddingTop:10,paddingLeft:35,marginLeft:10,
            borderRadius:20,width:"91%",paddingRight:40,fontFamily: 'OpenSansBold',marginTop:45}}>Add</Text>
            </TouchableOpacity>
            </View>
            
        
            <View style={styles.search}>
                <TextInput placeholder="Search Restaurant"></TextInput>
                <Icons name="ios-search" style={{marginTop:16,marginLeft:150,color:"#696969",fontSize:20}} ></Icons>
            </View>
            <View style={styles.view3}>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:20,color:"#696969",fontFamily:"OpenSansRegular"}}>ID</Text>
                <Text style={{marginLeft:120,marginTop:20,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:15,fontFamily:"OpenSansRegular",fontSize:9}} value={id} onChangeText={(text)=>setId(text)} keyboardType="number-pad"/>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Image</Text>
                <Text style={{marginLeft:94,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <Image></Image>
                </View>


                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Name</Text>
                <Text style={{marginLeft:95,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={name} onChangeText={(text)=>setName(text)}/>
                </View>


                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Phone</Text>
                <Text style={{marginLeft:92,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={phone} onChangeText={(text)=>setPhone(text)} keyboardType="number-pad"/>
                </View>


                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Email</Text>
                <Text style={{marginLeft:98,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontSize:9,fontFamily:"OpenSansRegular"}} value={email} onChangeText={(text)=>setEmail(text)}/>
                </View>


                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Occupation</Text>
                <Text style={{marginLeft:58,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={occupation} onChangeText={(text)=>setOccupation(text)}/>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Job Detail</Text>
                <Text style={{marginLeft:69,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} 
                value={job} onChangeText={(text)=>setJob(text)}/>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Vehicle type</Text>
                <Text style={{marginLeft:52,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}}
                 value={vehicle} onChangeText={(text)=>setVehicle(text)}/>
                </View>

                <View style={{flexDirection:'column'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Restaurant</Text></View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:18,color:"#696969",fontFamily:"OpenSansRegular"}}>Commission</Text>
                <Text style={{marginLeft:51,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={commission} onChangeText={(text)=>setCommission(text)} keyboardType="number-pad"/>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Revenu</Text>
                <Text style={{marginLeft:82,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={revenu} onChangeText={(text)=>setRevenu(text)}/>
                </View>


                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:25,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>Status</Text>
                <Text style={{marginLeft:90,marginTop:15,color:"#696969",fontFamily:"OpenSansRegular"}}>:</Text>
                <TextInput style={{marginLeft:5,marginTop:13,fontFamily:"OpenSansRegular",fontSize:9}} value={status} onChangeText={(text)=>setStatus(text)}/>
                </View>

                <TouchableOpacity  onPress={()=>navigation.navigate("deliveryEditScreen")}>
            <Text style={{backgroundColor:"#FDC913",marginLeft:100,marginTop:25,
            color:"white",height:38,paddingTop:10,paddingLeft:50,borderRadius:20,width:"40%",paddingRight:40,fontFamily: 'OpenSansBold'}}>Edit</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.view4}>
                <Text onPress={()=>navigation.navigate("deliveryTips")}
                style={{fontFamily:"OpenSansRegular",fontSize:15,color:"#696969"}}>Add Delivery Tip</Text>
            </View>

          
            </ScrollView>
        </View>
    )
}
export default deliveryBoy;

const styles = StyleSheet.create({
    boy:{
        marginTop:50,
        marginLeft:70,
        fontSize:20,
      
        fontFamily:"OpenSansSemiBold"
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:70,
      
        fontFamily:"OpenSansRegular"

    },
    boy2:{
        marginLeft:22,
        marginTop:40,
        fontSize:26,
        fontFamily:"OpenSansBold",
       
        marginRight:40

    },
    search:{
        backgroundColor:"white",
        marginTop:20,
        marginLeft:20,
        height:50,
        marginRight:20,
        borderRadius:10,
        paddingLeft:15,
        //width:"100%",
       // fontFamily:"OpenSansRegular",
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'row'

    },
    view3:{
        marginBottom:20,
        marginLeft:25,
        height: 570,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:20
    },
    view4:{
        marginBottom:30,
        marginLeft:25,
        height: 50,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft:100,
        paddingTop:15
    },
    search1:{
        //marginLeft:10,
        //marginRight:0,
        color:"#696969",
        fontFamily:"OpenSansRegular",
        fontSize:10,
        //paddingRight:15
    }
})