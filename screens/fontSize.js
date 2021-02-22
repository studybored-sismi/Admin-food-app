import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';


import {RadioButton} from 'react-native-paper';


const fontSize = ({navigation}) =>{
    const [checked, setChecked] = useState('first');

    return(
        <View style={styles.view4}>
            <Text style={styles.font}>Font Size</Text>
<View style={{flexDirection:'row'}}>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Small</Text>

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
      color:"#696969",marginRight:10}}>Medium</Text>

</View>

<View style={{flexDirection:'row'}}>
            <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Large</Text>

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


export default fontSize;


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
        marginRight:80
    }
})