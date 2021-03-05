import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';

const Coupon = (props) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => props.navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Coupon</Text>
             
            </View>
            <TouchableOpacity style={styles.touch} >
                <TextInput
                    placeholder="Search by Promocode"
                    style={styles.placeholder}
                    underlineColorAndroid='transparent'>
                </TextInput>
            </TouchableOpacity>
            <View style={styles.body}>
                <Image style={styles.img} source={require("../assets/coupon.jpg")} />
                <Text style={styles.text1}>Valid for all users</Text>
                <Text style={styles.text2}>Min. order amount : 200</Text>
                <View style={styles.optiondata}>
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
                        <Text style={styles.textdata} >View Restaurant</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option1}>
                    <Text style={styles.texts} onPress={() => props.navigation.navigate("EditCoupon")}>Edit</Text>
                    <Icon1 name="edit" style={styles.icons} />
                    <Text style={styles.texts} onPress={() => Alert.alert(
                    "",
                    "Are you sure want to delete?",
                    [
                        { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                    )}>  Delete</Text>
                    <Icon name="trash" style={styles.icons} />
                </View>
            </View>
            <View style={styles.option}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddCoupon")}>
                    <Text style={styles.text} >Add</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Coupon);
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        // backgroundColor: '#f5fffa',
        marginTop: 10,
        paddingBottom: 40
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 2,
        marginRight: 0
    },
    dashboard: {
        fontSize: 30,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        
        marginRight: 120,
        fontFamily: 'OpenSansBold'
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    touch: {
        paddingTop: 2,
        padding: 20,
        flexDirection: 'row'
    },
    placeholder: {
        width: 280,
        height: 42,
        // borderColor: 'white',
        // borderWidth: 2,
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 14,
        elevation:10,
        borderRadius: 8,
        fontFamily: 'OpenSansRegular'
    },
    body: {
        height: 400,
        width: 300,
        elevation: 8,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30
    },
    img: {
        height: 130,
        width: 120
    },
    text1: {
        paddingTop: 30,
        color: '#696969',
        fontSize: 20,
        fontFamily: 'OpenSansSemiBold'
    },
    text2: {
        paddingTop: 7,
        color: '#696969',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    optiondata: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 2
    },
    textdata: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 15,
        width: 180,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 10,
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold'
    },
    option1: {
        flexDirection: 'row',
        paddingTop: 20
    },
    texts: {
        textAlign: 'center',
        fontSize: 14,
        color: '#d0cbcb',
        paddingLeft: 25,
        fontFamily: 'OpenSansSemiBold'
    },
    icons: {
        fontSize: 12,
        marginTop: 1,
        marginLeft: 3,
        color: '#d0cbcb',
        paddingRight: 25
    },
    option: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 15,
        width: 220,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    }
});

