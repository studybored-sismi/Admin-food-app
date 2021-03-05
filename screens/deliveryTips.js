import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Image } from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

const deliveryTips = (props) => {

    return (
        <View style={{ backgroundColor: "#f5fffa",paddingBottom:0 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#f5fffa" }}>
                <View style={{ backgroundColor: "#f5fffa" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icons name="arrow-back" onPress={()=>props.navigation.navigate("deliveryBoy")} color="#FDC913" size={35} style={{ marginTop: 40, marginLeft: 10 }}></Icons>
                        <Text style={{ marginLeft: 75,marginTop: 50,color: "#696969",
                        fontFamily: "OpenSansSemiBold",fontSize:props.fontSize1}}>
                            Delivery Tip
                        </Text>
                    </View>

                    <View style={styles.view3}>
                        <Text style={{fontSize:props.fontSize,color: "#696969",fontFamily: "OpenSansBold",
        marginTop: 10,marginLeft: 15}}>Delivery Tip</Text>
                        <TextInput style={styles.input} keyboardType='default'></TextInput>
                        <TouchableOpacity onPress={() => props.navigation.navigate("deliveryBoy")}>
                            <Text style={{
                                backgroundColor: "#FDC913", color: "white", height: 38, paddingTop: 10, paddingLeft: 42, marginLeft: 110,
                                borderRadius: 20, width: "35%", paddingRight: 40, fontFamily: 'OpenSansBold',
                                 marginTop: 25
                            }}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(deliveryTips);



const styles = StyleSheet.create({
    Tips1: {
        marginLeft: 75,
        marginTop: 50,
        color: "#696969",
        fontFamily: "OpenSansSemiBold",
        fontSize: 20
    },
    back: {
        fontSize: 15,
        marginTop: 50,
        marginLeft: 70,
        color: "#696969",
        fontFamily: "OpenSansRegular"

    },
    Tips2: {
        color: "#696969",
        fontSize: 30,
        fontFamily: "OpenSansBold",
        marginTop: 10,
        marginLeft: 15
    },
    view3: {
        marginBottom: 260,
        paddingLeft: 0,
        paddingTop: 0,
        marginLeft: 18,
        height: 220,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 50
    },
    input: {
        borderColor: "#696969",
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 15,
        width: "90%",
        borderRadius: 2,
        backgroundColor: "white",
        height: "20%",
        fontFamily: "OpenSansRegular",
        color: "#696969"


    },

})