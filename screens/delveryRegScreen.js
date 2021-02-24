import React, { Component, useState,useEffect } from 'react';
import { StyleSheet, Text,Alert, View, ScrollView, TextInput,ImageBackground,Image} from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import {RadioButton} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
//import * as Permissions from 'expo-permissions';

const deliveryRegScreen=({navigation})=>{
  var items
  var items1
 
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [occupation,setOccupation] = useState();
    const [commission,setCommission] = useState();
    const [id,setId] = useState();
    const [image,setImage] = useState(null);
    const [checked, setChecked] = useState('first');
    const [check,setCheck] = useState('first');
    const[item,setItem] = useState('Part time');
    const [Items,setItems] = useState('Bike');

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

  
    return(
        <View  style={{backgroundColor:'#f5fffa'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:"row"}}>
             <Icons name="ios-menu" color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
            <Text style={styles.boy}>Delivery Boy</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("restScreen")}>Back</Text></View>

            
             {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius:80,marginLeft:100,marginTop:20 }} />}
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:100,color:"#696969",fontFamily:"OpenSansRegular",marginTop:15}}>Add Profile Picture</Text>
            <Icon name="camera" color="#1e90ff" size={25} onPress={pickImage}
             style={{marginLeft:10,marginTop:10}}></Icon>
            
           
            </View>

            <View style={styles.view3}>
                <Text style={{marginTop:10,marginLeft:35,fontFamily:"OpenSansRegular",
                color:"#696969",marginBottom:10}}>Delivery access</Text>

<View style={{flexDirection:'row',color:"red",marginLeft:30}}>
    
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color="#696969"
        
      />
      <Text style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",color:"#696969",marginRight:10}}>All</Text>
     
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color="#696969"
      />

<Text style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",color:"#696969"}}>Choose Restaurant</Text>
    </View>
             

                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969",marginTop:10}}>Name</Text>
                <TextInput style={styles.line} value={name} onChangeText={(text)=>setName(text)}  />

                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969"}}>Email</Text>
                <TextInput style={styles.line} value={email} onChangeText={(text)=>setEmail(text)}  />

                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969"}}>Phone</Text>
                <TextInput style={styles.line} value={phone} onChangeText={(text)=>setPhone(text)} keyboardType="number-pad" />

                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969"}}>Occupation</Text>
                <TextInput style={styles.line} value={occupation} onChangeText={(text)=>setOccupation(text)}  />

                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969",marginBottom:10}}>Job Detail</Text>
                <DropDownPicker
                    items={[
                        { label: 'Part time', value: 'Part time' },
                        { label: 'Full time', value: 'Full time' },
                       
                        
                    ]}
                    defaultValue={items}
                    containerStyle={{ height: 40 ,width:"80%",marginLeft:28}}
                    placeholder="Select job type"
                    style={styles.drop}
                    globalTextStyle={{fontFamily:"OpenSansRegular"}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(item)=>setItem(item.value)}
                    
                />
           
           <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",color:"#696969",marginBottom:10,marginTop:10}}>Type of Vehicle</Text>
                <DropDownPicker
                    items={[
                        { label: 'Bike', value: 'Bike' },
                        { label: 'Bicycle', value: 'Bicycle' },
                   
                        
                    ]}

                    defaultValue={items1}
                    containerStyle={{ height: 40 ,width:"80%",marginLeft:28}}
                    placeholder="Select vechicle"
                    style={styles.drop}
                    globalTextStyle={{fontFamily:"OpenSansRegular"}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(Items)=>setItems(Items.value)}
                    
                />

                <View style={{flexDirection:"row"}}>
                <Text style={{marginLeft:35,fontFamily:"OpenSansRegular",marginTop:10,color:"#696969"}}>Commission</Text>
                <TextInput style={styles.input} value={commission} onChangeText={(text)=>setCommission(text)} keyboardType="number-pad"/>
                </View>

                <View style={{flexDirection:'row',color:"red",marginLeft:50}}>
    
      <RadioButton
        value="first"
        status={ check === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setCheck('first')}
        color="#696969"
      />
      <Text style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",color:"#696969",marginRight:25}}>%</Text>

      <RadioButton
        value="second"
        status={ check === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setCheck('second')}
        color="#696969"
      />
            <Text style={{marginLeft:10,marginTop:10,fontFamily:"OpenSansRegular",color:"#696969"}}>Flat</Text>
    </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:35,marginTop:10,fontFamily:"OpenSansRegular",color:"#696969"}}>ID</Text>
                <TextInput style={styles.input2} value={id} onChangeText={(text)=>setId(text)} keyboardType="number-pad"/>
                </View>


                <TouchableOpacity  onPress={()=>navigation.navigate("deliveryBoy")}>
            <Text style={{backgroundColor:"#FDC913",marginLeft:100,marginTop:25,
            color:"white",height:38,paddingTop:10,paddingLeft:45,borderRadius:20,width:"40%",
            paddingRight:40,fontFamily: 'OpenSansBold'}}>Save</Text>
            </TouchableOpacity>
            </View>

            </ScrollView>
        </View>
    )
}

export default deliveryRegScreen;


const styles = StyleSheet.create({
    boy:{
        marginTop:50,
        marginLeft:70,
        fontSize:20,
        color:"#696969",
        fontFamily:"OpenSansSemiBold"
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:70,
        color:"#696969",
        fontFamily:"OpenSansRegular"

    },
    view3:{
        marginBottom:20,
        marginLeft:25,
        height: 720,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        //shadowOpacity: 0.5,
        shadowRadius: 5,
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
        marginRight:35,
        marginBottom:10,
        color:"#696969",
        fontFamily:"OpenSansRegular"

    },
    input:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:10,
       marginLeft:15,
       width:"46%",
       borderRadius:2,
       backgroundColor:"white",
       color:"#696969",
       fontFamily:"OpenSansRegular",
       marginBottom:10
       
   
    },
    input2:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:10,
       marginLeft:15,
       width:"70%",
       borderRadius:2,
       backgroundColor:"white",
       color:"#696969",
       fontFamily:"OpenSansRegular"
       
   
    },
})