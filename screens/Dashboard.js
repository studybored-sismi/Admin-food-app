import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { DrawerActions, useTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Logo from './Logo';

function Dashboard({ navigation }) {

    const { colors } = useTheme()

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={theme.dark ? "light-content" : "dark-content"} />
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name="menu" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Dashboard</Text>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Pending Order</Text>
                    <Text style={styles.text}>20</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Active Order</Text>
                    <Text style={styles.text}>25</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch1}>
                    <Text style={styles.text}>Delivered Order </Text>
                    <Text style={styles.text}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch1}>
                    <Text style={styles.text}>Cancelled Order</Text>
                    <Text style={styles.text}>10</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Restaurant </Text>
                    <Text style={styles.text}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Menu </Text>
                    <Text style={styles.text}>15</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Food Items </Text>
                    <Text style={styles.text}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch1} >
                    <Text style={styles.text}>Offer </Text>
                    <Text style={styles.text}>10</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option1}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("GraphicReport")}>
                    <Text style={styles.button}>Graphic Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("PendingOrder")}>
                    <Text style={styles.button}>Pending Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("ActiveOrder")}>
                    <Text style={styles.button}>Active Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa' ,
        paddingBottom: '200%'
    },
    head: {
        flexDirection: 'row',
        // backgroundColor: '#f5fffa',
        // marginTop: 10
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 2,
        marginLeft: 16
    },
    dashboard: {
        fontSize: 30,
        paddingLeft: 90,
        paddingBottom: 25,
        paddingTop: 2,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch1: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 15,
        width: 140,
        marginLeft: 10,
        marginRight: 10,
        height: 70,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 5,
        elevation: 2,
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column'
    },
    touch: {
        padding: 10,
    },
    text: {
        textAlign: 'center',

        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column',
        color: '#f5fffa'
    },
    option1: {
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        textAlign: 'center',
        padding: 15,
        width: 300,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 8,
        fontSize: 15,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },

});

export default Dashboard;