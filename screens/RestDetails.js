import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Image } from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

const RestDetails = (props) => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [basicCharge, setBasicCharge] = useState();
    const [deliveryCharge, setDeliveryCharge] = useState();
    const [deliveryMode, setDeliveryMode] = useState();
    const [adminDelivery, setAdminDelivery] = useState();
    const [adminPickup, setAdminPickup] = useState();
    const [minAmount, setMinAmount] = useState();
    const [licence, setLicence] = useState();
    const [category, setCategory] = useState();
    const [deliveryRadius, setDeliveryRadius] = useState();

    return (
        <View style={{ backgroundColor: "#f5fffa" }}>

            <View >


                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginBottom: 7, paddingTop: 40, flexDirection: 'row' }}>
                        <Icons name="arrow-back" onPress={() => navigation.navigate("restScreen")} color="#FDC913" size={35} style={{ marginLeft: 10 }}></Icons>
                        <Text style={{fontSize:props.fontSize,  marginLeft: 60,marginBottom: 20,
        color: "#696969",marginTop:1,fontFamily: "OpenSansSemiBold"}}>Restaurant</Text>

                    </View>

                    <ImageBackground source={require('../assets/banner1.jpg')} style={styles.Image2} >

                        <View style={styles.view3}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 20, marginLeft: 20, marginBottom: 10, marginRight: 115,fontSize:props.fontSize1, 
                                     color: "#696969", fontFamily: "OpenSansRegular" }}>Name</Text>
                                <Text style={{ marginTop: 25, color: "#696969", fontFamily: "OpenSansRegular" }}>:</Text>
                                <TextInput style={{ marginTop: 18, marginLeft: 5, color: "#696969", fontFamily: "OpenSansRegular", fontSize: 10 }} value={name} onChangeText={(text) => setName(text)} />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, marginRight: 100,
                                    fontSize:props.fontSize1, color: "#696969", fontFamily: "OpenSansRegular" }}>Address</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={address} onChangeText={(text) => setAddress(text)} />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10,
                                    fontSize:props.fontSize1, marginRight: 111, color: "#696969", fontFamily: "OpenSansRegular" }}>Phone</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={phone} onChangeText={(text) => setPhone(text)} keyboardType="number-pad" />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, 
                                    fontSize:props.fontSize1,marginBottom: 10, marginRight: 117, color: "#696969", fontFamily: "OpenSansRegular" }}>Email</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, fontSize:props.fontSize1,
                                    marginBottom: 10, marginRight: 16, color: "#696969", fontFamily: "OpenSansRegular" }}>Basic delivery charge</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={basicCharge} onChangeText={(text) => setBasicCharge(text)} keyboardType="number-pad" />
                            </View>


                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, marginRight: 57, color: "#696969", fontFamily: "OpenSansRegular" }}>Delivery charge</Text></View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 1, marginLeft: 20, marginBottom: 10, marginRight: 98, color: "#696969", fontFamily: "OpenSansRegular" }}>(per km)</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={deliveryCharge} onChangeText={(text) => setDeliveryCharge(text)} keyboardType="number-pad" />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10,
                                    fontSize:props.fontSize1, marginRight: 58, color: "#696969", 
                                    fontSize:props.fontSize1,fontFamily: "OpenSansRegular" }}>Delivery Mode</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={deliveryMode} onChangeText={(text) => setDeliveryMode(text)}></TextInput>
                            </View>


                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, 
                                    fontSize:props.fontSize1,marginRight: 62, color: "#696969",
                                    fontSize:props.fontSize1, fontFamily: "OpenSansRegular" }}>Admin Delivery</Text></View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 1, marginLeft: 20, marginBottom: 10, marginRight: 70, 
                                    color: "#696969", fontFamily: "OpenSansRegular",fontSize:props.fontSize1, }}>Commission</Text>

                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={adminDelivery} 
                                onChangeText={(text) => setAdminDelivery(text)} keyboardType="number-pad" />

                            </View>


                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, marginRight: 65, color: "#696969", fontFamily: "OpenSansRegular" }}>Admin Pickup</Text></View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 1, marginLeft: 20, marginBottom: 10, marginRight: 70, color: "#696969", fontFamily: "OpenSansRegular" }}>Commission</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={adminPickup} onChangeText={(text) => setAdminPickup(text)} keyboardType="number-pad" />
                            </View>


                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, marginRight: 56, color: "#696969", fontFamily: "OpenSansRegular" }}>Minimum order</Text></View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 1, marginLeft: 20, marginBottom: 10, marginRight: 98, color: "#696969", fontFamily: "OpenSansRegular" }}>Amount</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={minAmount} onChangeText={(text) => setMinAmount(text)} keyboardType="number-pad" />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, marginLeft: 20, marginBottom: 10, marginRight: 42, color: "#696969", fontFamily: "OpenSansRegular" }} >Licence Number</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={licence} onChangeText={(text) => setLicence(text)}></TextInput>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    marginTop: 5, marginLeft: 20, marginBottom: 10,
                                    marginRight: 91, color: "#696969", fontFamily: "OpenSansRegular"
                                }} >Category</Text>
                                <Text style={{ color: "#696969", fontFamily: "OpenSansRegular", marginTop: 5 }}>:</Text>
                                <TextInput style={styles.input2} value={category} onChangeText={(text) => setCategory(text)}></TextInput>
                            </View>



                            <TouchableOpacity onPress={() => navigation.navigate("restScreen")}>
                                <Text style={{
                                    backgroundColor: "#FDC913", fontFamily:'OpenSansSemiBold', marginLeft: 100,
                                     fontSize: 15, marginTop:20,
                                    color: "white", height: "36%", 
                                    paddingTop: 10, paddingLeft: 45, borderRadius: 20, width: 125, paddingRight: 45,
                                }}>Save</Text>
                            </TouchableOpacity>


                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>


        </View>
    )
}
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(RestDetails);



const styles = StyleSheet.create({


    rest: {
        fontSize: 30,
        marginLeft: 60,
        // marginTop:60,
        marginBottom: 20,
        color: "#696969",
        marginTop:1,
        fontFamily: "OpenSansSemiBold"
    },
    back: {
        fontSize: 15,
        marginTop: 55,
        marginLeft: 50,
        color: "#696969",
        fontFamily: "OpenSansRegular"

    },
    view3: {
        marginBottom: 20,
        marginLeft: 20,
        height: 630,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 100
    },
    map: {
        marginBottom: 20,
        marginLeft: 18,
        height: 15,
        width: "20%",
        backgroundColor: "#f5fffa",
        //borderRadius: 15,
        //elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 0
    },
    view4: {
        marginBottom: 20,
        paddingLeft: 0,
        paddingTop: 0,
        marginLeft: 32,
        height: 110,
        width: "80%",
        backgroundColor: "#f5fffa",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection: 'column',
        marginTop: 20
    },
    input: {
        borderColor: "#696969",
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 85,
        width: "35%",
        backgroundColor: "white",
        color: "#696969",
        fontFamily: "OpenSansRegular"



    },
    Image2: {

        width: "100%",
        height: "50%",
        resizeMode: "contain"
    },
    input2: {
        marginLeft: 5,
        color: "#696969",
        fontFamily: "OpenSansRegular",
        fontSize: 10
    }
})
    
   