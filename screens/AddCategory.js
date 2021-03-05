import React, { useState, useEffect, createRef } from 'react'
import { View, Text, Image, StyleSheet, Keyboard } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
const AddCategory = ({ navigation }) => {

    var items

    const [menuName, setMenuName] = useState('');
    const [category, setCategory] = useState('');
    const [menuDescription, setMenuDescription] = useState('');
    const [menuImage, setMenuImage] = useState('');
    const [errortext, setErrortext] = useState('');

    const menuNameInputRef = createRef();
    const categoryInputRef = createRef();
    const menuDescriptionInputRef = createRef();
    const menuImageInputRef = createRef();

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
    const handleSubmitButton = () => {
        setErrortext('');
        // if (!category) {
        //     alert('Please enter an item');
        //     return;
        // }
        if (!menuName) {
            alert('Please enter the name');
            return;
        }
        if (!menuDescription) {
            alert('Please enter the description');
            return;
        }
        if (!menuImage) {
            alert('Please choose an image');
            return;
        }
        navigation.navigate('Category')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Add Category</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Category')}>
                    <Text style={styles.headertext}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.stylecontainer}>
                <Text style={styles.textcolor1}>Category</Text>
                <DropDownPicker
                    items={[
                        { label: 'Asian', value: 'Asian' },
                        { label: 'Italian', value: 'Italian' },
                        { label: 'Mexican', value: 'Mexican' },
                        { label: 'North Indian', value: 'North Indian' },
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
            <View style={styles.stylecontainer}>
                <Text style={styles.textcolor}>Name</Text>
                <TextInput
                    keyboardType="default"
                    onChangeText={(menuName) => setMenuName(menuName)}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={menuNameInputRef}
                    onSubmitEditing={() =>
                        menuDescriptionInputRef.current &&
                        menuDescriptionInputRef.current.focus()
                    }
                    blurOnSubmit={false} />
                <View style={styles.line}></View>
            </View>
            <View style={styles.stylecontainer}>
                <Text style={styles.textcolor}>Description</Text>
                <TextInput
                    keyboardType="default"
                    onChangeText={(menuDescription) => setMenuDescription(menuDescription)}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={menuDescriptionInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false} />
                <View style={styles.line}></View>
            </View>
            <View style={styles.imagecontainer}>
                <Text style={styles.textcolor}>Image</Text>
                <TouchableOpacity style={styles.text} onPress={pickImage}>
                    <Text style={styles.colortext}>Choose Image</Text>
                </TouchableOpacity>
            </View>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.inputButton} onPress={handleSubmitButton}>
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(AddCategory);

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
        paddingLeft: 180,
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
        paddingTop: 100
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100
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
    }

})