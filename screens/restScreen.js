import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';


const restScreen = ({navigation}) =>{

   
  
    const onDelete = () =>{
        Alert.alert(
            ' ',
            'Are you sure want to delete this ?',
            [
              {text: 'Yes'},
              {text: 'No', style: 'No'},
            ],
            { 
              cancelable: false
            }
          );
    }
  
    return(
        
        <View style={{backgroundColor:"#f5fffa"}}>
            
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
           
            <View style={{marginBottom:40,flexDirection:'row'}}>
                <Icons name="ios-menu" onPress={() => navigation.navigate("settings")}
                 color="#FDC913" size={35} style={{marginTop:40,marginLeft:10}}></Icons>
 
             <Text style={styles.rest}>Restaurant</Text>
            <Text style={styles.back} onPress={()=>navigation.navigate("deliveryRegScreen")}>Back</Text>
            </View>

            <View style={{flexDirection:"row"}}>
            <Text style={styles.rest2 }>Restaurant</Text>
        
            <TouchableOpacity  onPress={()=>navigation.navigate("regScreen")}>
            <Text style={{backgroundColor:"#FDC913",
            color:"white",height:38,paddingTop:10,
            paddingLeft:40,borderRadius:20,width:"100%",paddingRight:40,fontFamily: 'OpenSansBold'}}>Add</Text>
            </TouchableOpacity>
 
            </View>

          
            <View style={styles.view3}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.reg}>Registered Restaurant</Text>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:25, marginTop:10, 
                color:"#696969",fontFamily: 'OpenSansRegular'}}>Blocked </Text>
            <Text style={{marginLeft:25, color:"#696969",
            fontFamily: 'OpenSansRegular'}}>Restaurant</Text></View>
            </View>

            
            <View style={styles.view1}  >
           
            
            <Text style={{marginBottom:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>ID</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{ color:"#696969",marginRight:80,fontFamily: 'OpenSansRegular'}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>Name</Text></View>
            <Icon1 name="pencil" size={20} style={{marginRight:10}} onPress={()=>navigation.navigate("EditScreen")}></Icon1>
            <Icon name="delete" size={20} onPress={onDelete}></Icon>
            </View>
            
            
            </View>


              
            <View style={styles.view1}>
            
            
            <Text style={{marginBottom:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>ID</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{ color:"#696969",marginRight:80,fontFamily: 'OpenSansRegular'}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>Name</Text></View>
            <Icon1 name="pencil" size={20} style={{marginRight:10}} onPress={()=>navigation.navigate("EditScreen")}></Icon1>
            <Icon name="delete" size={20} onPress={onDelete}></Icon>
            </View>
            
            
            </View>
             
            <View style={styles.view1}>
            
          
            <Text style={{marginBottom:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>ID</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{ color:"#696969",marginRight:80,fontFamily: 'OpenSansRegular'}}>Restaurant</Text>
            <Text style={{marginLeft:10, color:"#696969",fontFamily: 'OpenSansRegular'}}>Name</Text></View>
            <Icon1 name="pencil"  onPress={()=>navigation.navigate("EditScreen")} size={20} style={{marginRight:10}}></Icon1>
            <Icon name="delete" size={20} onPress={onDelete}></Icon>
            </View>
            
           
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
    
    rest:{
        fontSize:20,
        marginLeft:75,
        marginTop:60,
        color:"#696969",
        fontFamily: 'OpenSansSemiBold',
        
        

    },
    back:{
        fontSize:15,
        marginTop:55,
        marginLeft:70,
        color:"#696969",
        fontFamily: 'OpenSansRegular'
    },
    rest2:{
        fontSize:35,
        marginLeft:20,
        marginRight:20,
        //color:colors.textColor,
        color:"#696969",
        fontFamily: 'OpenSansBold'
    
        
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
        fontFamily: 'OpenSansRegular'

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