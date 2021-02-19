import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,CheckBox} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';;
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign'
import DropDownPicker from 'react-native-dropdown-picker';


const EditScreen = ({navigation}) =>{
    var items
    const [name,setName]= useState();
    const[email,setEmail] = useState();
    const [phone,setPhone]= useState();
    const [address, setAddress] = useState();
 
    const[licence,setLicence]= useState();
    const[item,setItem] = useState('Delivery');
    const [asianSelect,setAsianSelect] =  useState(false);
    const [italianselect,setItalianSelect] = useState(false);
    const [northselect,setNorthSelect] = useState(false);
    return(
        
        <View style={{backgroundColor:"#f5fffa"}}>
            

            <View >
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.res}>Edit Restaurant</Text>
            <Text style={{marginTop:60,color:"#696969", fontFamily: 'OpenSansRegular'}} onPress={()=>navigation.navigate("restScreen")}>Back</Text>
            </View>

            


            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Restaurant Name</Text>
            <TextInput style={styles.line} value={name} onChangeText={(text)=>setName(text)}  />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}} >Restaurant Email</Text>
            <TextInput style={styles.line} value={email}  onChangeText={(text)=>setEmail(text)} keyboardType="email-address" />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Restaurant Phone</Text>
            <TextInput style={styles.line} value={phone} onChangeText={(text)=>setPhone(text)} keyboardType="number-pad" />

            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Restaurant Address</Text>
            <TextInput style={styles.line} value={address} onChangeText={(text)=>setAddress(text)} />

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Delivery Mode</Text>

            
            </View>
            <DropDownPicker
                    items={[
                        { label: 'Delivery', value: 'Delivery' },
                        { label: 'Self pickup', value: 'Self pickup' },
                        { label: 'Both', value: 'Both' },
                        
                    ]}
                    defaultValue={items}
                    containerStyle={{ height: 50 }}
                    placeholder="Select a mode"
                    style={styles.drop}
                    globalTextStyle={{fontFamily:"OpenSansRegular"}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(item)=>setItem(item.value)}
                    
                />
           
           
        
            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Licence Number</Text>
            <TextInput style={styles.line} value={licence}  onChangeText={(text)=>setLicence(text)} keyboardType="number-pad" placeholder="" />
            
            <Text style={{marginLeft:35,marginTop:20,color:"#696969", fontFamily: 'OpenSansBold',}}>Category</Text>

          
        

            <View style={styles.categ}>
                <View style={{flexDirection:'row', }}>
            <Text style={{marginRight:133,fontFamily:"OpenSansRegular"}}>Asian</Text>
                    <CheckBox value={asianSelect}
                    onValueChange={setAsianSelect}
                    style={{marginLeft:10}}>

                    </CheckBox>
                    </View>


                    <View style={{flexDirection:'row', }}>
                    <Text style={{marginRight:129,fontFamily:"OpenSansRegular"}}>Italian</Text>
                    <CheckBox value={italianselect}
                    onValueChange={setItalianSelect}
                    style={{marginLeft:10}}>

                    </CheckBox></View>
                <View style={{flexDirection:'row', }}>

                    <Text style={{marginRight:86,fontFamily:"OpenSansRegular"}}>North Indian</Text>


                    <CheckBox value={northselect}
                    onValueChange={setNorthSelect}
                    style={{marginLeft:10}}>

                    </CheckBox></View>

                </View>

            
 <TouchableOpacity style={{width:"100%",}} onPress={()=>navigation.navigate("restScreen")}>
            <Text style={{backgroundColor:"#FDC913", marginLeft:45,fontSize:15,fontWeight:"bold",marginBottom:40,
            color:"white",height:"30%",paddingTop:10,paddingLeft:110,borderRadius:20,width:"75%",paddingRight:40,fontFamily:"OpenSansBold"}}>Submit</Text>
            </TouchableOpacity>
           
            </ScrollView>
            </View>
        </View>
       
    )
}

export default EditScreen;

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection:'row'
    },
 
    res:{
        marginLeft:20,
        marginRight:80,
        fontSize:25,
        marginTop:60,
        color:"#696969",
        fontFamily: 'OpenSansBold'
        

    },
    categ:{
        paddingLeft:25,
        paddingTop:15,
        marginBottom:20,
        height: 130,
        width: "70%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft:55,
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
    drop:{
        backgroundColor: '#fafafa',
        marginLeft:32,
        marginTop:15,
        marginRight:32
        //fontFamily: 'OpenSansRegular' 
    }
})