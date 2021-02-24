import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

import {RadioButton} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';


const notification = ({navigation}) =>{
    
    const [checked, setChecked] = useState('first');
    return(
        <View style={{backgroundColor:"#f5fffa"}}>
            <View style={{flexDirection:'row'}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.report}>Report</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryBoy")}>Back</Text>
             </View>
             <View style={styles.view3}>
            <View style={{flexDirection:"row"}}>
            
          
            
         <Text style={styles.reg} >Notification</Text>
         <Text style={{marginLeft:25, marginTop:20, marginRight:32,fontSize:16,
                color:"#696969",fontFamily: 'OpenSansRegular'}}
                onPress={()=>navigation.navigate("Feedback")}>Feedback </Text>
            </View>

            
<View style={{flexDirection:'row',marginLeft:25}}>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Pop up notification</Text>

</View>

<View style={{flexDirection:'row',marginLeft:25}}>
            <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Send via Message</Text>

</View>

<View style={{flexDirection:'row',marginLeft:25}}>
            <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color="#696969"
        
      />
      <Text 
      style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",
      color:"#696969",marginRight:10}}>Send via Email</Text>

</View>

            
            
          
            </View>

        </View>
    )

}


export default notification;

const styles = StyleSheet.create({
    report:{
        marginLeft:95,
        marginTop:50,
       color:"#696969",
        fontFamily:"OpenSansSemiBold",
        fontSize:20,
        marginBottom:40
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:90,
        color:"#696969",
        fontFamily:"OpenSansRegular"

    },
    reg:{
        paddingLeft:45,
        paddingTop:20,
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
        fontFamily: 'OpenSansRegular'

    },
    view3:{
        marginBottom:60,
        marginLeft:25,
        height: 420,
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
})