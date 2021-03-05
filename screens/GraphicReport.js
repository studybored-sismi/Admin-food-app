import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';

const GraphicReport = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Logo /> */}
            <View style={styles.head}>
                <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Dashboard")}>
                    <Icon name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Graphic Report</Text>
                {/* <Text style={styles.back} >Back</Text> */}
            </View>
            <View style={styles.graph}>
                <Text style={styles.search}>Search by Date</Text>
                <Text style={styles.date}>dd/mm/yyyy</Text>
            </View>
            <View style={styles.graph1}>
                <View style={styles.body}>
                    <Text style={styles.text1}>Revenue : Feruary 2021</Text>
                    <Image style={styles.img} source={require("../assets/graph1.jpg")} />
                </View>
                <View><Text></Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Orders : Feruary 2021</Text>
                    <Image style={styles.img} source={require("../assets/graph1.jpg")} />
                </View>
            </View>
        </View>
    );
}
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(GraphicReport);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        paddingTop:40,
        flexDirection: 'row',
        backgroundColor: '#f5fffa',
        paddingBottom: 40,
        
    },
    menu: {
        
        paddingRight:70
        // marginTop: 2,
        // marginRight: 4
    },
    dashboard: {
        fontSize: 25,
        paddingRight:80,
        color: '#696969',
        fontFamily: 'OpenSansBold',
       
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    graph: {
        flexDirection: 'row',
        backgroundColor: '#f5fffa'
    },
    search: {
        padding: 10,
        color: '#696969',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    date: {
        padding: 10,
        color: '#ddd',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    graph1: {
        alignItems: 'center'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 250,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        alignItems: 'center',
        paddingTop: 20
    },
    img: {
        height: 200,
        width: 240,
        alignItems: 'center'
    },
    text1: {
        paddingRight: 28,
        color: '#696969',
        fontSize: 16,
        fontFamily: 'OpenSansSemiBold'
    }
});

