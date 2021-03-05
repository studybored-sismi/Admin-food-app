import React, { useState, useEffect, createRef } from 'react'
import { View, Text, Image, StyleSheet, Keyboard } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
const AddFoodItems = ({ navigation }) => {

    var items

    const [foodName, setFoodName] = useState('');
    const [foodcategory, setFoodCategory] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [foodImage, setFoodImage] = useState('');
    const [errortext, setErrortext] = useState('');

    const foodNameInputRef = createRef();
    const categoryInputRef = createRef();
    const foodDescriptionInputRef = createRef();
    const foodImageInputRef = createRef();

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
        // if (!foodcategory) {
        //     alert('Please enter an item');
        //     return;
        // }
        if (!foodName) {
            alert('Please enter the name');
            return;
        }
        if (!foodDescription) {
            alert('Please enter the description');
            return;
        }
        if (!foodImage) {
            alert('Please choose an image');
            return;
        }
        navigation.navigate('FoodItems')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Add Food Items</Text>
                <TouchableOpacity onPress={() => navigation.navigate('FoodItems')}>
                    <Text style={styles.headertext}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.stylecontainer}>
                <Text style={styles.textcolor1}>Food Item</Text>
                <DropDownPicker
                    items={[
                        { label: 'Burger', value: 'Burger' },
                        { label: 'Sandwich', value: 'Sandwich' },
                        { label: 'Alfam', value: 'Alfam' },
                        { label: 'BBQ Chicken', value: 'BBQ Chicken' },
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
                    onChangeText={(foodName) => setFoodName(foodName)}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={foodNameInputRef}
                    onSubmitEditing={() =>
                        foodDescriptionInputRef.current &&
                        foodDescriptionInputRef.current.focus()
                    }
                    blurOnSubmit={false} />
                <View style={styles.line}></View>
            </View>
            <View style={styles.stylecontainer}>
                <Text style={styles.textcolor}>Description</Text>
                <TextInput
                    keyboardType="default"
                    onChangeText={(foodDescription) => setFoodDescription(foodDescription)}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={foodDescriptionInputRef}
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


export default connect(mapStateToProps)(AddFoodItems);

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
        paddingLeft: 160,
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