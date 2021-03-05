import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Logo from './Logo';
import { ScrollView } from 'react-native-gesture-handler';

function AddBanner(props) {

    const [item, setItem] = useState('UK')
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={30} color="#FDC913" onPress={() => props.navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={{  fontSize:props.fontSize, paddingBottom: 5,color: '#696969',
        fontFamily: 'OpenSansBold',marginRight: 70}}>Add Banner</Text>

            </View>
            <View style={styles.body}>
                <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 2,color: '#696969'}}>Restaurant Name</Text>
                <TextInput style={styles.input1} />
                <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 2,color: '#696969'}}>Restaurant Branch</Text>
                <TextInput style={styles.input1} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 10,color: '#696969'}}>Category</Text>
                </View>
                <DropDownPicker style={styles.dropdown}
                    containerStyle={{ height: 40, width:300}}
                    color='#696969'
                    globalTextStyle={{ fontFamily: "OpenSansRegular",fontSize:props.fontSize1 }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fff' }}
                />
                <TextInput style={styles.input1} />
                <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 2,color: '#696969'}}>Banner Validity</Text>
                <TextInput style={styles.input1} />
                <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 2,color: '#696969'}}>Banner Name</Text>
                <TextInput style={styles.input1} />

                <View style={styles.imagecontainer}>
                    <Text style={{  fontSize:props.fontSize1,fontFamily: 'OpenSansSemiBold',paddingTop: 10,
        paddingBottom: 2,color: '#696969'}}>Image</Text>
                    <TouchableOpacity style={styles.textes} onPress={pickImage}>
                        <Icon1 name="picture" style={styles.colortext} />
                    </TouchableOpacity>
                </View>
                {image && <Image source={{ uri: image }} style={styles.image} />}
                {/* <TextInput style={styles.input1} /> */}
            </View>
            <View style={styles.option}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Banner")}>
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


export default connect(mapStateToProps)(AddBanner);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '5%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',

        backgroundColor: '#f5fffa',
        marginTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 1
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 8,
        marginRight: 60
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        marginRight: 70
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: "OpenSansSemiBold"
    },
    body: {
        fontSize: 25,
        color: '#696969'
    },
    input: {
        fontSize: 16,
        fontFamily: 'OpenSansSemiBold',
        paddingTop: 10,
        paddingBottom: 2,
        color: '#696969'
    },
    testes: {
        backgroundColor: 'white',
        elevation: 5,
        width: 110,
        padding: 5,
        borderRadius: 50,
        // marginTop:20,
        // marginBottom:10

    },
    image: {
        width: 100,
        height: 100
    },
    input1: {
        borderColor: '#fff',
        borderBottomColor: '#696969',
        borderWidth: 1,
        marginBottom: 10,
        width: 300
    },
    category: {
        flexDirection: 'row'
    },
    dropdown: {
        borderColor: 'grey'
    },


    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    colortext: {
        color: '#FDC913',
        paddingLeft: 220,
        paddingTop: 15,
        fontSize: 20,
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 220,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        fontSize: 14,
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontFamily: 'OpenSansSemiBold'
    },
    imagecontainer: {flexDirection:'row'}
});
