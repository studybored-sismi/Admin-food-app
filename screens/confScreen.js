import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,ImageBackground} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const confScreen = ({navigation}) =>{
    const [time,setTime]= useState();
    const [minTime,setMintime]= useState();
    const [maxTime, setMaxtime] =useState();

    return(
        <View style={{backgroundColor:"#f5fffa"}}>
       
        

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom:7,flexDirection:'row'}}>
               
            <Text style={styles.rest}>Restaurant</Text>
           
            </View>
            <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2} >
                   
            <View style={styles.view3}>
            <Text style={{marginLeft:45,marginTop:30,color:"#696969",fontFamily:"OpenSansRegular"}}>Preparation Time</Text>
            <TextInput style={styles.input} value={time} onChangeText={(text)=>setTime(text)} keyboardType="number-pad" />

            <Text style={{marginLeft:40,marginTop:10,color:"#696969",fontFamily:"OpenSansRegular"}}>Minimum Delivery Time</Text>
            <TextInput style={styles.input} value={minTime} onChangeText={(text)=>setMintime(text)} keyboardType="number-pad" /
            >
            <Text  style={{marginLeft:40,marginTop:10,color:"#696969",fontFamily:"OpenSansRegular"}}>Maximum Delivery Time</Text>
            <TextInput style={styles.input} value={maxTime} onChangeText={(text)=>setMaxtime(text)} keyboardType="number-pad"/>

            <Text  style={{marginLeft:40,marginTop:10,marginBottom:10,color:"#696969",fontFamily:"OpenSansRegular"}}>Set Time Slot</Text>

            <View style={styles.view4}>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:15,marginTop:10,marginRight:20,color:"#696969",fontFamily:"OpenSansRegular"}}>Mon</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:10,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>


            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:15,marginTop:5,marginRight:25,color:"#696969",fontFamily:"OpenSansRegular"}}>Tue</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:15,marginTop:5,marginRight:20,color:"#696969",fontFamily:"OpenSansRegular"}}>Wed</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:15,marginTop:5,marginRight:23,color:"#696969",fontFamily:"OpenSansRegular"}}>Thu</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:17,marginTop:5,marginRight:30,color:"#696969",fontFamily:"OpenSansRegular"}}>Fri</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:17,marginTop:5,marginRight:25,color:"#696969",fontFamily:"OpenSansRegular"}}>Sat</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:17,marginTop:5,marginRight:22,color:"#696969",fontFamily:"OpenSansRegular"}}>Sun</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            <Text style={{marginRight:20,marginTop:5,marginLeft:25,color:"#696969",fontFamily:"OpenSansRegular"}}>to</Text>
            <TextInput style={styles.input2} keyboardType='number-pad'></TextInput>
            </View>
            </View>
            <TouchableOpacity   onPress={()=>navigation.navigate("detailScreen")}>
            <Text style={{backgroundColor:"#FDC913", marginLeft:100,fontSize:15,fontWeight:'bold',
            color:"white",height:"38%",paddingTop:7,paddingLeft:50,borderRadius:20,width:"40%",paddingRight:40,fontFamily:"OpenSansBold"}}>Save</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
          
            </ScrollView>
            </View>
    )
}

export default confScreen;

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection:'row'
    },

    rest:{
        fontSize:30,
        marginLeft:100,
        marginTop:50,
        marginBottom:10,
        color:"#696969",
        fontFamily:"OpenSansSemiBold"
    },
    back:{
        fontSize:15,
        marginTop:55,
        marginLeft:55,
        color:"#696969",
        fontFamily:"OpenSansRegular"
    },
    input:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:10,
       marginLeft:45,
       width:"70%",
       borderRadius:2,
       backgroundColor:"white",
       fontFamily:"OpenSansRegular",
       color:"#696969"
       
   
    },
    view3:{
        marginBottom:20,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:18,
        height: 620,
        width: "90%",
        backgroundColor: "#f5fffa",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop:90
    },
    input2:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:10,
       marginLeft:0,
       width:"20%",
       height:"40%",
       borderRadius:2,
       fontFamily:"OpenSansRegular",
       color:"#696969"
      
   
    },
    view4:{
        marginBottom:20,
        paddingLeft:0,
        paddingTop:0,
        marginLeft:36,
        height: 280,
        width: "78%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    Image2:{
        
        width:"100%",
        height:"50%",
        resizeMode:"contain"
    }
})