import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import fontSize from './fontSize';


const Block = (props) => {

    return (

        <View style={{ backgroundColor: "#f5fffa" }}>

            <View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between',
                        paddingTop: 40, marginLeft: 20, marginRight: 100
                    }} >
                        <TouchableOpacity onPress={() => props.navigation.navigate("restScreen")}>
                            <Icons name="arrow-back"
                                color="#FDC913" size={30} style={{ paddingTop: 5 }} ></Icons>
                        </TouchableOpacity>
                        <Text style={{fontSize:props.fontSize , color: "#696969",
                         fontFamily: 'OpenSansBold',}}>Restaurant</Text>


                    </View>

                    <View style={styles.view3}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: 'column', marginRight: 54 }}>
                                <TouchableOpacity  onPress={() =>props.navigation.navigate("restScreen")}>
                                    <Text style={{
                                        marginLeft: 25, marginTop: 10, fontSize: 15,
                                        color: "#696969", fontFamily: 'OpenSansSemiBold'
                                    }}>Registered</Text>
                                    <Text style={{
                                        marginLeft: 25, marginTop: 2, fontSize: 15,
                                        color: "#696969", fontFamily: 'OpenSansSemiBold'
                                    }}>Restaurant</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.reg}>
                                <TouchableOpacity  onPress={() =>navigation.navigate("Block")}>
                                <Text style={{
                                    marginLeft: 25, marginTop: 10,
                                    color: "#696969", fontFamily: 'OpenSansSemiBold'
                                }}>Blocked </Text>
                                <Text style={{
                                    marginLeft: 25, color: "#696969",
                                    fontFamily: 'OpenSansSemiBold'
                                }}>Restaurant</Text>
                                </TouchableOpacity>
                                </View>
                        </View>


                        <View style={styles.view1}  >

                            <TouchableOpacity>

                                <Text style={{ marginBottom: 10,fontSize:props.fontSize1, color: "#696969", fontFamily: 'OpenSansRegular' }} 
                                onPress={() => props.navigation.navigate("RestDetails")}>
                                    ID</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "#696969", marginRight: 80,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular' }}
                                         onPress={() => props.navigation.navigate("RestDetails")}>Restaurant Name</Text>
                                        {/* <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }} onPress={() => navigation.navigate("RestDetails")}>Name</Text> */}
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>



                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", fontSize:props.fontSize1,
                            fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969", marginRight: 80,fontSize:props.fontSize1, 
                                    fontFamily: 'OpenSansRegular' }}>Restaurant Name</Text>
                                     {/* <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>Name</Text> */}
                                    </View> 

                            </View>


                        </View>

                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", 
                            fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969",fontSize:props.fontSize1,
                                     marginRight: 80, fontFamily: 'OpenSansRegular' }}>Restaurant Name</Text>
                                    {/* <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>Name</Text> */}
                                    </View>

                            </View>


                        </View>



                    </View>
                </ScrollView>
            </View>
        </View>




    )
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Block);


const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row'
    },

    rest: {
        fontSize: 30,
        marginLeft: 0,
        // marginRight:10,
        // marginTop: 60,
        color: "#696969",
        fontFamily: 'OpenSansBold',
    },
    back: {
        fontSize: 15,
        marginTop: 55,
        marginLeft: 70,
        color: "#696969",
        fontFamily: 'OpenSansRegular'
    },
    rest2: {
        fontSize: 35,
        marginLeft: 20,
        marginRight: 20,
        //color:colors.textColor,
        color: "#696969",
        fontFamily: 'OpenSansBold'


    },

    view1: {
        paddingLeft: 25,
        paddingTop: 35,
        marginBottom: 20,
        height: 120,
        width: "82%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft: 25
    },
    reg: {
        paddingLeft: 5,
        paddingTop: 1,
        fontSize: 15,
        height: 60,
        width: "50%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginBottom: 50,
        color: "#696969",
        fontFamily: 'OpenSansRegular'

    },
    view3: {
        marginBottom: 60,
        marginLeft: 25,
        height: 620,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 20
    }

});