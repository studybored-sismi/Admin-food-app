import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
function AddCoupon(props) {

    var items
    const [checked, setChecked] = useState('first');
    const [check, setCheck] = useState('first');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => props.navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={{fontSize:props.fontSize, paddingBottom: 5,
        color: '#696969',fontFamily: 'OpenSansBold',}}>Add Coupon</Text>
            </View>
            <View style={styles.body}>

                <View style={{ flexDirection: 'row', color: "#696969" , marginTop:1 }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 8, fontFamily: "OpenSansRegular",fontSize: props.fontSize1,
                     color: "#696969", marginRight: 10 }}>For all Users</Text>
                </View>
                <View style={{ flexDirection: 'row', color: "#696969", marginBottom:2 }}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 8, fontFamily: "OpenSansRegular",fontSize: props.fontSize1,
                     color: "#696969" }}>For First time Users</Text>
                </View>

                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',
                fontFamily: 'OpenSansSemiBold'}}>Coupon Code Name</Text>
                <TextInput style={styles.input1} />
                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Coupon Code Description</Text>
                <TextInput style={styles.input1} />

                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Coupon Code Discount</Text>
                <View style={{ flexDirection: 'row', color: "#696969" }}>
                    <RadioButton
                        value="first"
                        status={check === 'first' ? 'check' : 'uncheck'}
                        onPress={() => setCheck('first')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular",fontSize: props.fontSize1,
                     color: "#696969", marginRight: 10 }}>%</Text>
                    <RadioButton
                        value="second"
                        status={check === 'second' ? 'check' : 'uncheck'}
                        onPress={() => setCheck('second')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular",fontSize: props.fontSize1,
                     color: "#696969" }}>Value</Text>
                </View>


                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Minimum Basket Value</Text>
                <TextInput style={styles.input1} />
                <View style={styles.side}>
                    <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Coupon Bearer</Text>

                    <DropDownPicker style={styles.dropdown}
                        items={[
                            { label: 'Admin', value: 'Admin' },
                            { label: 'Restaurant', value: 'Restaurant' },
                        ]}
                        containerStyle={{ height: 40, width: 196, paddingLeft: 35 }}
                        color='#696969'
                        globalTextStyle={{ fontFamily: "OpenSansRegular",fontSize:props.fontSize1 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fff' }}
                    />
                </View>
                <View style={styles.side}>
                    <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Commission</Text>
                    <TextInput style={styles.box}></TextInput>
                </View>
                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Total no. of Vouchers</Text>
                <TextInput style={styles.input1} />
                <Text style={{  fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>No. of Redeems allowed for Users</Text>
                <TextInput style={styles.input1} />
                <Text style={{fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Coupon Validity</Text>
                <TextInput style={styles.input1} />
                <Text style={{fontSize: props.fontSize1,paddingTop: 1,color: '#696969',fontFamily: 'OpenSansSemiBold'}}>Select Restaurant</Text>
            </View>
           
                    <DropDownPicker style={styles.dropdown}
                        items={[
                            { label: 'Admin', value: 'Admin' },
                            { label: 'Restaurant', value: 'Restaurant' },
                        ]}
                        containerStyle={{ height: 40, width: 300}}
                        color='#696969'
                        globalTextStyle={{ fontFamily: "OpenSansRegular",fontSize:props.fontSize1 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fff' }}
                    />
              
            <View style={styles.option}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Coupon")}>
                    <Text style={styles.text}>Save</Text>
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


export default connect(mapStateToProps)(AddCoupon);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '5%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5fffa',
        marginTop: 30,
        paddingBottom: 40,
        paddingLeft: 1,
        paddingRight: 110,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 6,
        paddingRight: 40,
        paddingLeft:80
        // marginRight: 50
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        
    },
    body: {
        fontSize: 25,
        color: '#696969'
    },
    input: {
        
        paddingTop: 1,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    input1: {
        borderColor: '#fff',
        borderBottomColor: '#696969',
        borderWidth: 1,
        marginBottom: 5,
        width: 300
    },
    touch: {
        paddingTop: 2,
        padding: 10,
        flexDirection: 'row'
    },
    placeholder: {
        width: 300,
        height: 35,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        elevation: 4,
    },
    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 170,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    box: {
        borderWidth: 1,
        borderColor: '#696969',
        height: 20,
        width: 160,
        color: '#696969',
        borderColor: '#696969',
        marginLeft: 55
    },
    side: {
        flexDirection: 'row'
    }
});

