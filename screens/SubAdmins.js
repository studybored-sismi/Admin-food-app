import { PinDropSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated, Alert, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';

const SubAdmins = (props) => {

    const [people, setPeople] = useState([

        { name: 'Sherin John', id: '1' },
        { name: 'Sismi Joseph', id: '2' },
        { name: 'Anjali Dileep', id: '3' },
        
    ])

    const Item = ({ item, onPress }) => (
        <View>
            <TouchableOpacity
                activeOpacity={0.3}
                style={styles.item}
                onPress={onPress}>
                <Text style={{fontSize:props.fontSize1, textAlign: 'center',
                    color: '#696969',fontFamily: 'OpenSansSemiBold',}}>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.pad}></View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item
            item={item}
            onPress={() => props.navigation.navigate('SubAdminsDetails', { items: item })}
        />
    );
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.3} onPress={()=>props.navigation.navigate("settings")}>
                    <Icon style={styles.headertext} name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={{fontSize:props.fontSize, color: '#696969',textAlign:'center',
                    fontFamily: 'OpenSansBold'}}>Admins</Text>

            </View>
            
            <View>
                <FlatList
                    data={people}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.inputButton} onPress={() =>props.navigation.navigate('AddSubAdmins')}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(SubAdmins);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        height: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        
        paddingBottom: 50
    },
    headertext: {
        paddingLeft:10,
        paddingRight:80

    },
    headertxt: {
        //fontSize: props.fontSize,
        color: '#696969',
        fontFamily: 'OpenSansBold'
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