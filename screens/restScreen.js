import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import { DrawerActions } from '@react-navigation/native';
import { connect } from 'react-redux';


const restScreen = (props) => {

    const onDelete = () => {
        Alert.alert(
            ' ',
            'Are you sure want to delete this ?',
            [
                { text: 'Yes' },
                { text: 'No', style: 'No' },
            ],
            {
                cancelable: false
            }
        );
    }

    return (

        <View style={{ backgroundColor: "#f5fffa" }}>

            <View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between',
                        paddingTop: 40, marginLeft: 20, marginRight: 20
                    }} >
                        <TouchableOpacity onPress={() => props.navigation.navigate("Dashboard")}>
                            <Icons name="arrow-back"
                                color="#FDC913" size={30} style={{ paddingTop: 5 }} ></Icons>
                        </TouchableOpacity>
                        <Text style={{fontSize:props.fontSize,   marginLeft: 20,color: "#696969",
                                    fontFamily: 'OpenSansBold',}}>Restaurant</Text>

                        <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>props.navigation.navigate("regScreen")}>
                            <Text style={{
                                backgroundColor: "#FDC913",fontSize:props.fontSize1,
                                color: "white", height: 38, paddingTop: 10, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, borderRadius: 20, width: "100%", fontFamily: 'OpenSansBold'
                            }}>Add</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.view3}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.reg}>Registered Restaurant</Text>


                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("Block")} >
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

                                <Text style={{ marginBottom: 10, color: "#696969",
                                fontSize:props.fontSize1, fontFamily: 'OpenSansRegular' }} 
                                onPress={() => props.navigation.navigate("tabScreen")}>
                                    ID</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "#696969", marginRight: 80, 
                                        fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}
                                         onPress={() => props.navigation.navigate("tabScreen")}>Restaurant</Text>
                                        <Text style={{ marginLeft: 10, color: "#696969",
                                        fontSize:props.fontSize1, fontFamily: 'OpenSansRegular' }}
                                         onPress={() => props.navigation.navigate("tabScreen")}>Name</Text>
                                    </TouchableOpacity>
                                </View>
                                <Icon1 name="pencil" size={20} style={{ marginRight: 10 }}
                                 onPress={() => props.navigation.navigate("EditScreen")}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
                            </View>


                        </View>



                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", 
                            fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969", marginRight: 80, 
                                    fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}>Restaurant</Text>
                                    <Text style={{ marginLeft: 10, color: "#696969",
                                    fontSize:props.fontSize1, fontFamily: 'OpenSansRegular' }}>Name</Text></View>
                                <Icon1 name="pencil" size={20} style={{ marginRight: 10 }}
                                 onPress={() => props.navigation.navigate("EditScreen")}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
                            </View>


                        </View>

                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", 
                            fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969", marginRight: 80,
                                    fontSize:props.fontSize1, fontFamily: 'OpenSansRegular' }}>Restaurant</Text>
                                    <Text style={{ marginLeft: 10, color: "#696969", 
                                    fontSize:props.fontSize1,fontFamily: 'OpenSansRegular' }}>Name</Text></View>
                                <Icon1 name="pencil" onPress={() => props.navigation.navigate("EditScreen")} size={20} style={{ marginRight: 10 }}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
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


export default connect(mapStateToProps)(restScreen);


const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row'
    },

    rest: {
        fontSize: 30,
        marginLeft: 20,
       
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
        paddingLeft: 35,
        paddingTop: 10,
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
        fontFamily: 'OpenSansSemiBold'

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