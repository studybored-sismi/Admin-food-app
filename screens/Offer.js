import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';

function Offer(props) {

    return (
        <View style={styles.container}>
            
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => props.navigation.navigate("Dashboard")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={{ fontSize:props.fontSize,paddingBottom: 5,color: '#696969',fontFamily: 'OpenSansBold',
                    marginRight:130}}>Offer</Text>
               
            </View>
            <View style={styles.option}>
                
                <View style={styles.option1}>
                    <TouchableOpacity style={styles.touch} onPress={() => props.navigation.navigate("Banner")}>
                        <Text style={{textAlign: 'center',padding: 10,width: 350, borderColor: '#dddddd',
                    backgroundColor: '#fff',elevation: 8,borderRadius: 5, fontSize:props.fontSize1,color: '#696969',
                    fontFamily: 'OpenSansSemiBold'}}>Banner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => props.navigation.navigate("Coupon")}>
                        <Text style={{textAlign: 'center',padding: 10,width: 350, borderColor: '#dddddd',
                    backgroundColor: '#fff',elevation: 8,borderRadius: 5, fontSize:props.fontSize1,color: '#696969',
                    fontFamily: 'OpenSansSemiBold'}}>Coupon</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Offer);
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
        paddingBottom: 40,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 2,
        marginRight: 100
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        marginRight:130
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    option: {
        paddingTop: 10
    },
    text: {
        textAlign: 'left',
        paddingLeft: 20,
        fontSize: 30,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    option1: {
        paddingTop: 20,
        alignItems: 'center'
    },
    touch: {
        padding: 20
    },
    button: {
        textAlign: 'center',
        padding: 10,
        width: 350,
        // height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 5,
        fontSize: 20,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    }
});

