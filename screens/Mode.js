import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';

import {EventRegister} from 'react-native-event-listeners';
import {RadioButton} from 'react-native-paper';


const Mode = ({navigation}) =>{

    
   const [checked, setChecked] = useState('first');
   //const [darkMode,setDarkMode] = useState(false);

    return(
        <View style={styles.view4}>
            <Text style={styles.font}>Choose Mode</Text>
<View style={{flexDirection:'row'}}>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Light</Text>

</View>

<View style={{flexDirection:'row'}}>
            <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
     
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Dark</Text>

</View>



            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:"OpenSansBold",color:"#FDC913",marginTop:25,
            marginLeft:65}}>Cancel</Text>
                <Text style={{fontFamily:"OpenSansBold",color:"#FDC913",marginTop:25,
            marginLeft:45}}>OK</Text>
            </View>


        </View>
    )




}


export default Mode;


const styles = StyleSheet.create({
   
    view4:{
        marginBottom:30,
        marginLeft:45,
        height: 220,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft:50,
        paddingTop:15,
        marginTop:150
    },
    font:{
        fontFamily:"OpenSansBold",
        color:"#696969",
        fontSize:20,
        marginTop:10,
        marginRight:80,
        marginBottom:10
    }
})