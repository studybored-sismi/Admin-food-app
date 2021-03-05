import React, { Component } from "react";
import {
    View,
    StyleSheet,Button,TouchableOpacity,Pressable,Text
} from "react-native";
//import Text from '../components/CustomText'
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
                 <Pressable 
                onPress={() => { this.props.small1FontSize(this.props.fontSize1);
                    this.props.small2FontSize(this.props.fontSize2);
                 this.props.smallFontSize(this.props.fontSize)} 
                  } >
                   <Text style={{fontSize:this.props.fontSize1}}>Small</Text>
               </Pressable>
             

               <Pressable 
                onPress={() => { this.props.medium1FontSize(this.props.fontSize1);
                    this.props.medium2FontSize(this.props.fontSize2);
                 this.props.mediumFontSize(this.props.fontSize)} 
                  } >
                   <Text style={{fontSize:this.props.fontSize1}}>Medium</Text>
               </Pressable>

               <Pressable 
                onPress={() => { this.props.large1FontSize(this.props.fontSize1);
                    this.props.large2FontSize(this.props.fontSize2);
                 this.props.largeFontSize(this.props.fontSize)} 
                  } >
                   <Text style={{fontSize:this.props.fontSize1,margin:10}}>Large</Text>
               </Pressable>
            
             

                <View style={{flexDirection:'row',color:"#FDC913"}}>
                <View style={{color:"red"}}>
                <Text style={{fontFamily:"OpenSansBold",color:"#FDC913",marginTop:25,
            marginLeft:65}}>Cancel</Text>
            </View>
                <Text style={{fontFamily:"OpenSansBold",color:"#FDC913",marginTop:25,
            marginLeft:45}}>OK</Text>
            </View>   
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1,fontSize2} = state;
    return {fontSize,fontSize1,fontSize2};
};

const mapDispatchToProps = (dispatch) => {
    return {
            largeFontSize: (fontSize) => dispatch(IncreaseFontSize(fontSize)),
            mediumFontSize: (fontSize) => dispatch(MediumFontSize(fontSize)),
            smallFontSize:(fontSize) => dispatch(DecreaseFontSize(fontSize)),

            large1FontSize: (fontSize1) => dispatch(LargeFontSize(fontSize1)),
            medium1FontSize: (fontSize1) => dispatch(Medium1FontSize(fontSize1)),
            small1FontSize:(fontSize1) => dispatch(SmallFontSize(fontSize1)),

            large2FontSize: (fontSize2) => dispatch(Large2FontSize(fontSize2)),
            medium2FontSize: (fontSize2) => dispatch(Medium2FontSize(fontSize2)),
            small2FontSize:(fontSize2) => dispatch(Small2FontSize(fontSize2)),
       

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(fontSize);

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