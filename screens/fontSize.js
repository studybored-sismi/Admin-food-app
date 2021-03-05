import React, { Component } from "react";
import {
    View,
    StyleSheet,Button,TouchableOpacity,Pressable
} from "react-native";
import Text from '../components/CustomText'
import { connect } from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons'
//import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper'
import { DecreaseFontSize, IncreaseFontSize,MediumFontSize,SmallFontSize,Small2FontSize,Medium2FontSize,Large2FontSize,
    LargeFontSize,Medium1FontSize} from "../reduxConfig/action";

class fontSize extends Component {
  
   
   // const [checked, setChecked] = useState('first');
    render() {
        return (
            <View style={styles.view4}>
                <TouchableOpacity onPress={()=>this.props.SmallFontSize()}>
              <Text>Small</Text></TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.MediumFontSize()}>
              <Text>Medium</Text></TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.LargeFontSize()}>
              <Text>Large</Text></TouchableOpacity>
              
               
              </View>
        )
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        LargeFontSize: () => dispatch ( { type : 'LARGE_FONT_SIZE'}),
        MediumFontSize: () => dispatch({type:'MEDIUM_FONT_SIZE'}),
        SmallFontSize: () => dispatch({type: 'SMALL_FONT_SIZE'})
    }
}
export default  connect(null,mapDispatchToProps)(fontSize);
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