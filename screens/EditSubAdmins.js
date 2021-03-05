import React, { useState, useEffect, createRef } from 'react'
import { View, Text, Image, StyleSheet, Keyboard } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
const EditSubAdmins = ({ navigation }) => {

    var items

    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPhone, setAdminPhone] = useState('');
    const [date, setDate] = useState('');
    const [permissions, setPermissions] = useState('');
    const [errortext, setErrortext] = useState('');

    const adminNameInputRef = createRef();
    const adminEmailInputRef = createRef();
    const adminPhoneInputRef = createRef();
    const dateInputRef = createRef();
    const permissionsInputRef = createRef();

    const [item, setItem] = useState('UK')

    const handleSubmitButton = () => {
        setErrortext('');

        if (!adminName) {
            alert('Please enter the name');
            return;
        }
        if (!adminEmail) {
            alert('Please enter the Email');
            return;
        }
        if (!adminPhone) {
            alert('Please enter the phone number');
            return;
        }
        if (!date) {
            alert('Please enter the date');
            return;
        }
        navigation.navigate('SubAdmins')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Edit Admin Details</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SubAdmins')}>
                    <Text style={styles.headertext}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.back}>

                <View style={styles.stylecontainer}>
                    <Text style={styles.textcolor}>Name</Text>
                    <TextInput
                        keyboardType="default"
                        onChangeText={(adminName) => setAdminName(adminName)}
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        ref={adminNameInputRef}
                        onSubmitEditing={() =>
                            adminEmailInputRef.current &&
                            adminEmailInputRef.current.focus()
                        }
                        blurOnSubmit={false} />
                    <View style={styles.line}></View>
                </View>
                <View style={styles.stylecontainer}>
                    <Text style={styles.textcolor}>Email</Text>
                    <TextInput
                        keyboardType="email-address"
                        onChangeText={(adminEmail) => setAdminEmail(adminEmail)}
                        returnKeyType="next"
                        ref={adminEmailInputRef}
                        onSubmitEditing={() =>
                            adminEmailInputRef.current &&
                            adminEmailInputRef.current.focus()
                        }
                        blurOnSubmit={false} />
                    <View style={styles.line}></View>
                </View>
                <View style={styles.stylecontainer}>
                    <Text style={styles.textcolor}>Phone</Text>
                    <TextInput
                        keyboardType="phone-pad"
                        onChangeText={(adminPhone) => setAdminPhone(adminPhone)}
                        returnKeyType="next"
                        ref={adminPhoneInputRef}
                        onSubmitEditing={() =>
                            adminPhoneInputRef.current &&
                            adminPhoneInputRef.current.focus()
                        }
                        blurOnSubmit={false} />
                    <View style={styles.line}></View>
                </View>
                <View style={styles.stylecontainer}>
                    <Text style={styles.textcolor}>Join Date</Text>
                    <TextInput
                        keyboardType="default"
                        onChangeText={(date) => setDate(date)}
                        returnKeyType="next"
                        ref={dateInputRef}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false} />
                    <View style={styles.line}></View>
                </View>
                <View style={styles.stylecontainer}>
                    <Text style={styles.textcolor1}>Permissions</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Menu', value: 'Menu' },
                            { label: 'Restaurant', value: 'Restaurant' },
                            { label: 'Delivery Boys', value: 'Delivery Boys' },
                            { label: 'Order', value: 'Order' },
                            { label: 'Offers', value: 'Offers' },
                        ]}
                        defaultValue={items}
                        containerStyle={{ height: 40 }}
                        style={styles.drop}
                        globalTextStyle={{ fontFamily: 'OpenSansRegular' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setItem(item.value)}

                    />
                </View>

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.inputButton} onPress={handleSubmitButton}>
                        <Text style={styles.button}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(EditSubAdmins);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        height: '100%',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingBottom: 20,
    },
    headertext: {
        paddingLeft: 120,
        paddingTop: 7,
        color: '#696969',
        fontFamily: 'OpenSansRegular'
    },
    headertxt: {
        fontSize: 20,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    stylecontainer: {
        paddingTop: 30
    },
    textcolor: {
        color: '#696969',
        fontSize: 15,
        fontFamily: 'OpenSansBold',
        paddingBottom: 10
    },
    textcolor1: {
        color: '#696969',
        fontSize: 15,
        fontFamily: 'OpenSansBold',
        paddingBottom: 20
    },

    buttoncontainer: {
        paddingTop: 30,
        paddingBottom:30
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        width:100,
        alignSelf:'center'
    },
    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
    },
    image: {
        width: 100,
        height: 100
    },
    imagecontainer: {
        paddingTop: 30,
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    text: {
        backgroundColor: 'white',
        elevation: 5,
        width: 110,
        padding: 5,
        borderRadius: 50,
        // marginTop:20,
        // marginBottom:10

    },
    colortext: {
        color: '#FDC913',
        fontFamily: 'OpenSansRegular'

    },
    drop: {
        backgroundColor: '#fafafa',
        fontFamily: 'OpenSansRegular'
    },
    back:{
        backgroundColor:'white',
        paddingLeft:20,
        paddingRight:20,
        elevation:5,
        borderRadius:20,
        marginTop:50
    }

})