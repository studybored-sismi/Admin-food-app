import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, CheckBox } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';;

import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';

const EditScreen = (props) => {
    var items
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [basic, setBasic] = useState();
    const [charge, setCharge] = useState();
    const [minimum, setMinimum] = useState();
    const [licence, setLicence] = useState();
    const [item, setItem] = useState('Delivery');


    const [asianSelect, setAsianSelect] = useState(false);
    const [italianselect, setItalianSelect] = useState(false);
    const [northselect, setNorthSelect] = useState(false);
    return (

        <View style={{ backgroundColor: "#f5fffa", paddingLeft: 20, paddingRight: 20 }}>


            <View >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", paddingTop: 40, paddingBottom:20}}>
                        <Text style={{fontSize:props.fontSize,  marginRight: 100,
                    color: "#696969", fontFamily: 'OpenSansBold'}}>Edit Restaurant</Text>

                        <Text style={{ marginTop: 10, color: "#696969", fontFamily: 'OpenSansRegular', 
                        fontSize:props.fontSize1,marginLeft: 15 }}
                            onPress={() => props.navigation.navigate("restScreen")}>Back</Text>
                    </View>

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Restaurant Name</Text>
                    <TextInput style={styles.line} value={name} onChangeText={(text) => setName(text)} />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }} >Restaurant Email</Text>
                    <TextInput style={styles.line} value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Restaurant Phone</Text>
                    <TextInput style={styles.line} value={phone} onChangeText={(text) => setPhone(text)} keyboardType="number-pad" />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Restaurant Address</Text>
                    <TextInput style={styles.line} value={address} onChangeText={(text) => setAddress(text)} />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Basic Delivery Charge</Text>
                    <TextInput style={styles.line} value={basic} onChangeText={(text) => setBasic(text)} keyboardType="number-pad" />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Delivery Charge (Per Km)</Text>
                    <TextInput style={styles.line} value={charge} onChangeText={(text) => setCharge(text)} keyboardType="number-pad" />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Minimum Order Amount</Text>
                    <TextInput style={styles.line} value={minimum} onChangeText={(text) => setMinimum(text)} keyboardType="number-pad" />


                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', fontSize: props.fontSize1 }}>Delivery Mode</Text>


                    </View>
                    <DropDownPicker
                        items={[
                            { label: 'Delivery', value: 'Delivery' },
                            { label: 'Self pickup', value: 'Self pickup' },
                            { label: 'Both', value: 'Both' },

                        ]}
                        defaultValue={items}
                        containerStyle={{ height: 50 }}
                        placeholder="Select a mode"
                        style={styles.drop}
                        globalTextStyle={{ fontFamily: "OpenSansRegular" }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setItem(item.value)}

                    />



                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold',
                     fontSize: props.fontSize1}}>Licence Number</Text>
                    <TextInput style={styles.line} value={licence} onChangeText={(text) => setLicence(text)} keyboardType="number-pad" placeholder="" />

                    <Text style={{ marginTop: 20, color: "#696969", fontFamily: 'OpenSansBold', 
                    fontSize: props.fontSize1 }}>Category</Text>




                    <View style={styles.categ}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: 133, fontFamily: "OpenSansRegular",fontSize:props.fontSize1 }}>Asian</Text>
                            <CheckBox value={asianSelect}
                                onValueChange={setAsianSelect}
                                style={{ marginLeft: 10 }}>

                            </CheckBox>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginRight: 129, fontFamily: "OpenSansRegular" ,fontSize:props.fontSize1}}>Italian</Text>
                            <CheckBox value={italianselect}
                                onValueChange={setItalianSelect}
                                style={{ marginLeft: 10 }}>

                            </CheckBox></View>
                        <View style={{ flexDirection: 'row', }}>

                            <Text style={{ marginRight: 86, fontFamily: "OpenSansRegular",fontSize:props.fontSize1}}>North Indian</Text>


                            <CheckBox

                                value={northselect}
                                onValueChange={setNorthSelect}
                                style={{ marginLeft: 10 }}


                            >

                            </CheckBox></View>

                    </View>


                    <TouchableOpacity style={{ width: "100%", }} onPress={() => props.navigation.navigate("restScreen")}>
                        <Text style={{
                            backgroundColor: "#FDC913", marginLeft: 45, fontSize: 20, marginBottom: 40,
                            color: "white", height: "30%", paddingTop: 10,paddingLeft:20,paddingRight:20,paddingBottom:10,alignSelf:'center', borderRadius: 20, width: 115, fontFamily: "OpenSansBold"
                        }}>Submit</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>

    )
}


const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(EditScreen);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row'
    },

    res: {
        // marginLeft:20,
        marginRight: 100,
        fontSize: 25,
        // marginTop:60,
        color: "#696969",
        fontFamily: 'OpenSansBold'


    },
    categ: {
        paddingLeft: 25,
        paddingTop: 15,
        marginBottom: 20,
        height: 130,
        width: "70%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft: 55,
        marginTop: 20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 10,
        paddingRight: 20,
        // paddingBottom:20
        flexDirection: 'row',
        // marginLeft:35,
        // marginRight:35,
        fontFamily: "OpenSansRegular",
        color: "#696969"

    },
    drop: {
        backgroundColor: '#fafafa',
        // marginLeft:32,
        marginTop: 15,
        // marginRight:32
        //fontFamily: 'OpenSansRegular' 
    }
})