import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';

const OrderDetails = (props) => {

    return (
        <View style={styles.container}>
        {/* <Logo /> */}
        <View style={styles.head}>
            <TouchableOpacity style={styles.menu} onPress={() => props.navigation.navigate("ActiveOrder")}>
                <Icon name="arrow-back" size={30} color="#FDC913" />
            </TouchableOpacity>
            <Text style={{fontSize:props.fontSize,paddingRight:80,
        color: '#696969',fontFamily: 'OpenSansBold',}}>Order Details</Text>
            {/* <Text style={styles.back} >Back</Text> */}
        </View>
            <View style={styles.body}>
                <View style={styles.image1}>
                    <Image style={styles.image} source={require("../assets/burger.jpg")} />
                    <View style={styles.view}>
                        <Text style={styles.text1}>Burger * 2 </Text>
                        <Text style={styles.text2}>Rs.0.00</Text>
                    </View>
                </View>
                <View style={styles.body1}>

                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Order Date</Text>
                        <Text style={{
                            paddingLeft: 55, fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 15-02-2021</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Payment mode</Text>
                        <Text style={{
                            paddingLeft: 24,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: Cash</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Restaurant Name</Text>
                        <Text style={{
                            paddingLeft: 5, fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Address</Text>
                        <Text style={{
                            paddingLeft: 78,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>

                    <Text style={{padding: 20,textAlign: 'center',fontFamily: 'OpenSansSemiBold',
                    fontSize:props.fontSize2,color:"#696969"}}>Bill Details</Text>

                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Username</Text>
                        <Text style={{
                            paddingLeft: 50, fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: XYZ</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Phone</Text>
                        <Text style={{
                            paddingLeft: 80, fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: +91 123456789</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Address</Text>
                        <Text style={{
                            paddingLeft: 67, fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Order Price</Text>
                        <Text style={{
                            paddingLeft: 41,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Delivery charge</Text>
                        <Text style={{
                            paddingLeft: 9,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Tax</Text>
                        <Text style={{
                            paddingLeft: 102,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Delivery Tip</Text>
                        <Text style={{
                            paddingLeft: 38,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{paddingLeft: 40,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Total</Text>
                        <Text style={{
                            paddingLeft: 90,fontSize:props.fontSize1, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
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


export default connect(mapStateToProps)(OrderDetails);

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        paddingTop:10,
        flexDirection: 'row',
        // backgroundColor: '#f5fffa',
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
        fontFamily: 'OpenSansRegular'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 500,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        paddingTop: 10
    },
    image1: {
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        paddingBottom: 30
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 8
    },
    view: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 10,
        alignItems: 'center'
    },
    text1: {
        paddingTop: 20,
        fontSize: 16,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    text2: {
        padding: 3,
        fontSize: 15,
        color: 'red',
        fontFamily: 'OpenSansSemiBold'
    },
    body1: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 330,
        width: 330
    },
    data: {
        flexDirection: 'row'
    },
    text3: {
        paddingLeft: 40,
        fontSize: 15,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    text5: {
        padding: 20,
        textAlign: 'center',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        color:"#696969"
    }
});

