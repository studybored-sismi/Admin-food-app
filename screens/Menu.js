import React, { useState } from 'react'
import { View,  TouchableOpacity, ScrollView, Animated, Alert, StyleSheet, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'
import Text from '../components/CustomText'
import { connect } from 'react-redux';

export const myWidth = Dimensions.get("window").width;
export const myHeight = Dimensions.get("window").height;
const standardWidth = 75;
const standardHeight = 667;

export function widthScale (dimension) {
    return (dimension / standardWidth) * myWidth;
}

export function heightScale (dimension) {
    return (dimension / standardHeight) * myHeight;
}
const Menu = ({ navigation }) => {

    const { colors } = useTheme()

    const [category, setCategory] = useState([
        { name: 'Asian', id: '1' },
        { name: 'Italian', id: '2' },
        { name: 'Mexican', id: '3' },
        { name: 'North Indian', id: '4' },
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
            onPress={() => navigation.navigate('Category', { items: item })}
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
                        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
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
                <TouchableOpacity onPress={() => navigation.navigate('EditMenu')}>
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
            <View>
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}  >
                        <Icon style={styles.headertext} name="arrow-back" size={30} color="#FDC913" />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Menu</Text>

                </View>

                <View>
                    <FlatList
                        data={category}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.inputButton} onPress={() => navigation.navigate('AddMenu')}>
                        <Text style={styles.button}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


export default Menu;
//export default  connect(null,mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        height: '100%',
        // paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        
        paddingBottom: 50
    },
    headertext: {
        paddingRight:110

    },
    headertxt: {
        fontSize: 25,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        marginRight: 30
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
    },
    categorytext: {
        fontSize: 18,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    buttoncontainer: {
        paddingTop: 50
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

})