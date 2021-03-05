import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/dist/src/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
const Settlementsummary = (props) => {

    return (
        <View style={styles.container}>
           <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => props.navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style= {{fontSize:props.fontSize, paddingBottom: 5,color: '#696969',marginTop:20,
                fontFamily: 'OpenSansBold',}}>Settlement Summary</Text>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => props.navigation.navigate("Offer")}>
                <TextInput
                    placeholder="Search by Order no./Restaurant ID."
                    style={styles.placeholder}
                    underlineColorAndroid='transparent'>
                </TextInput>
            </TouchableOpacity>
            <View style={styles.body}>

                <View style={styles.body1}>

                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Order No.</Text>
                        <Text style={{ paddingLeft: 62, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Restaurant ID</Text>
                        <Text style={{ paddingLeft: 38, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Restaurant Name</Text>
                        <Text style={{ paddingLeft: 15, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Customer Name</Text>
                        <Text style={{ paddingLeft: 21, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Order Delivery Date</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Tax</Text>
                        <Text style={{ paddingLeft: 95, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Commission</Text>
                        <Text style={{ paddingLeft: 42, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Delivery Charge</Text>
                        <Text style={{ paddingLeft: 26, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Order Amount</Text>
                        <Text style={{ paddingLeft: 34, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={{ fontSize:props.fontSize1,color: '#696969',padding: 5,
                            fontFamily: 'OpenSansRegular'}}>Delivery Tip</Text>
                        <Text style={{ paddingLeft: 48, fontSize: 13, color: '#696969' }}>:  </Text>
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


export default connect(mapStateToProps)(Settlementsummary);
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#f5fffa',
        marginTop: 10,
        paddingBottom: 40,
        paddingLeft: 2,
        paddingRight: 2,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 20,
        paddingRight: 1,
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
        paddingLeft: 60,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
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
    touch: {
        paddingTop: 2,
        padding: 20,
        flexDirection: 'row'
    },
    placeholder: {
        width: 300,
        height: 42,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        fontFamily:'OpenSansSemiBold',
        elevation:10,
        borderRadius:8
    },
    text3: {
        fontSize: 16,
        color: '#696969',
        padding: 5,
        fontFamily: 'OpenSansRegular'
    },
    data: {
        flexDirection: 'row',
        paddingRight: 100
    }
});

