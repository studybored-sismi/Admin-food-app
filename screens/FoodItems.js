import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated, Alert, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
const FoodItems = ({ route }) => {

    const item = route.params.items

    const navigation = useNavigation();

    const [food, setFood] = useState([
        { name: ' Veg Burger', id: '1' },
        { name: 'Elk Burger', id: '2' },
        { name: 'Beef Burger', id: '3' },
        { name: 'Chicken Burger', id: '4' },
    ])

    const Item = ({ item, onPress }) => (
        <Swipeable renderRightActions={RightActions}>

            <TouchableOpacity
                activeOpacity={0.3}
                style={styles.item}
                onPress={onPress}>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.pad}></View>

        </Swipeable>
    );

    const renderItem = ({ item }) => (
        <Item
            item={item}
        
        />
    );

    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [0.7, 0]
        })
        return (
            <>
                <TouchableOpacity onPress={() => Alert.alert(
                    "",
                    "Are you sure want to delete?",
                    [
                        { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                    )}>
                    <View
                        style={{
                            padding: 15,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            borderRadius: 50,
                            elevation: 1
                        }}>
                        <Animated.Text
                            style={{
                                color: '#FDC913',
                                paddingHorizontal: 10,
                                fontFamily: 'OpenSansRegular',
                                transform: [{ scale }]
                            }}>
                            Delete
                        </Animated.Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EditFoodItems')}>
                    <View
                        style={{
                            padding: 15,
                            backgroundColor: '#FDC913',
                            justifyContent: 'center',
                            borderRadius: 50

                        }}>
                        <Animated.Text
                            style={{
                                color: 'white',
                                paddingHorizontal: 10,
                                fontFamily: 'OpenSansRegular',
                                transform: [{ scale }]
                            }}>
                            Edit
                  </Animated.Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate('Category')}>
                    <Icon name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.headertxt}>{item.name}</Text>
                <TouchableOpacity style={styles.inputButton} onPress={() => navigation.navigate('AddFoodItems')}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={food}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


        </ScrollView>
    )
}


const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(FoodItems);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        height: '100%',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 50
    },
    headertext: {

        paddingTop: 7,
        color: '#696969',
        fontFamily: 'OpenSansRegular'
    },
    headertxt: {
        fontSize: 25,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        marginLeft:25
        // paddingLeft: 100
    },
    
    item: {
        backgroundColor: 'white',
        elevation: 2,
        padding: 20,
        borderRadius: 50,
    },
    pad: {
        paddingBottom: 30
    },
    title: {
        textAlign: 'center',
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15
    },
    category: {
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categorytext: {
        fontSize: 30,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',

    },
    buttoncontainer: {
        paddingRight: 50
    },
    inputButton: {
        paddingTop: 5,
        backgroundColor: '#FDC913',
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100
    },
    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,

    },
    card: {
        paddingLeft: 10,
        paddingRight: 10
    }

})