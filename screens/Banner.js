import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';

const Banner = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Banner</Text>
                <TouchableOpacity onPress={() => navigation.navigate("AddBanner")}>
                    <Text style={styles.add}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.round}>
                <View style={styles.touchable}>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon1 name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon1 name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon1 name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon1 name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.touchable}>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon1 name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon1 name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon1 name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon1 name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Banner);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        // alignItems: 'center'

    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5fffa',
        marginTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        paddingRight: 10,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 5,
        paddingRight: 20,
        // marginRight: 100
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        // marginRight:130
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    options: {
        flexDirection: 'row'
    },
    banner: {
        textAlign: 'left',
        fontSize: 25,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',
        paddingRight: 25
    },
    button: {
        paddingLeft: 100
    },
    add: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 80,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    round: {
        paddingTop: 20,
        alignItems: 'center'
    },
    touchable: {
        flexDirection: 'row'
    },
    touch: {
        padding: 25
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 185,
        width: 130,
        elevation: 8,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    circle: {
        textAlign: 'center',
        borderWidth: 2,
        padding: 10,
        width: 60,
        height: 60,
        borderColor: 'white',
        backgroundColor: '#ed5959',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',
    },
    option: {
        flexDirection: 'row',
        paddingTop: 10
    },
    text1: {
        textAlign: 'center',
        fontSize: 13,
        color: '#d0cbcb',
        fontFamily: 'OpenSansRegular',
    },
    icon: {
        fontSize: 12,
        marginTop: 1,
        marginLeft: 3,
        color: '#d0cbcb'
    }
});
