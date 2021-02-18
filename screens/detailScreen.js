import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

const detailScreen = ({navigation}) =>{
    const [name,setName]= useState();
    const [address, setAddress] = useState();
    const [phone,setPhone]= useState();
    const[email,setEmail] = useState();
    const[basicCharge,setBasicCharge] = useState();
    const[deliveryCharge,setDeliveryCharge] = useState();
    const[deliveryMode,setDeliveryMode] = useState();
    const[adminDelivery,setAdminDelivery] = useState();
    const[adminPickup,setAdminPickup] = useState();
    const[minAmount,setMinAmount] = useState();
    const[licence,setLicence] =useState();
    const[deliveryRadius,setDeliveryRadius] = useState();
    
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
        
        <View >

             <Text style={styles.logo}>LOGO</Text>
             <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{marginBottom:7,flexDirection:'row'}}>
                <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:10,marginLeft:10}}></Icons>
            <Text style={styles.rest}>Restaurant</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("restScreen")}>Back</Text>
            </View>

            <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2} >
                  
            <View style={styles.view3}>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:20,marginLeft:20,marginBottom:10,marginRight:115,color:"#696969"}}>Name</Text>
            <Text style={{marginTop:20,color:"#696969"}}>:</Text>
            <TextInput style={{marginTop:10,marginLeft:5}} value={name} onChangeText={(text)=>setName(text)} />
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:100,color:"#696969"}}>Address</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={address} onChangeText={(text)=>setAddress(text)} />
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:112,color:"#696969"}}>Phone</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={phone} onChangeText={(text)=>setPhone(text)} keyboardType="number-pad"/>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:116,color:"#696969"}}>Email</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={email}  onChangeText={(text)=>setEmail(text)}/>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:20,color:"#696969"}}>Basic delivery charge</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={basicCharge} onChangeText={(text)=>setBasicCharge(text)} keyboardType="number-pad"/>
            </View>
            
            
                <View style={{flexDirection:'column'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:57,color:"#696969"}}>Delivery charge</Text></View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:98,color:"#696969"}}>(per km)</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={deliveryCharge} onChangeText={(text)=>setDeliveryCharge(text)} keyboardType="number-pad"/>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:63,color:"#696969"}}>Delivery Mode</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={deliveryMode} onChangeText={(text)=>setDeliveryMode(text)} keyboardType="number-pad"></TextInput>
            </View>

            
            <View style={{flexDirection:'column'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:62,color:"#696969"}}>Admin Delivery</Text></View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:70,color:"#696969"}}>Commission</Text>
            
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={adminDelivery} onChangeText={(text)=>setAdminDelivery(text)} keyboardType="number-pad" />
           
            </View>

           
            <View style={{flexDirection:'column'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:65,color:"#696969"}}>Admin Pickup</Text></View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:70,color:"#696969"}}>Commission</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={adminPickup} onChangeText={(text)=>setAdminPickup(text)} keyboardType="number-pad"/>
            </View>

            
            <View style={{flexDirection:'column'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:56,color:"#696969"}}>Minimum order</Text></View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:20,marginBottom:10,marginRight:100,color:"#696969"}}>Amount</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={minAmount} onChangeText={(text)=>setMinAmount(text)} keyboardType="number-pad"/>
            </View>
            
            


            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:1,marginLeft:22,marginBottom:10,marginRight:45,color:"#696969"}}>Licence Number</Text>
            <Text style={{color:"#696969"}}>:</Text>
            <TextInput style={{marginLeft:5}} value={licence} onChangeText={(text)=>setLicence(text)} keyboardType="number-pad"/>
            </View>
            

            
            <View style={styles.view4}>
            <Text style={{marginLeft:45,marginTop:10,color:"#696969"}}>Enter Delivery Radius in km</Text>
            <TextInput style={styles.input} value={deliveryRadius} onChangeText={(text)=>setDeliveryRadius(text)} keyboardType="number-pad" />

            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:5,marginLeft:45,color:"#696969", marginRight:35}}>View on Map</Text>
            
            <Image source={require('../assets/map.png')} style={{width:"15%",height:"100%",marginTop:10}}></Image>
           
            </View>
            </View>

            <TouchableOpacity  onPress={()=>navigation.navigate("restScreen")}>
            <Text style={{backgroundColor:"#FDC913", marginLeft:95,fontSize:15,fontWeight:'bold',
            color:"white",height:"38%",paddingTop:8,paddingLeft:50,borderRadius:20,width:"40%",paddingRight:40}}>Save</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </ScrollView>
        </View>
        
        
        </View>
    )
}


export default detailScreen;

const styles = StyleSheet.create({
    
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
    view3:{
        marginBottom:220,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:18,
        height: 670,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:130
    },
    view4:{
        marginBottom:20,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:32,
        height: 110,
        width: "80%",
        backgroundColor: "#f5fffa",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'column',
        marginTop:20
    },
    input:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:10,
       marginLeft:85,
       width:"35%",
       
       
   
    },
    Image2:{
        
        width:"100%",
        height:"46%",
        resizeMode:"contain"
    },
})
