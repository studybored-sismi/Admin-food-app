import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
const DeleteBanner = ({ navigation }) => {

    return (
        <View style={styles.container}>
           <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Delete Banner</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.texts}>Delete</Text>
                <View style={styles.body}>
                    <Text style={styles.text}>Are you sure?</Text>
                    <View style={styles.option}>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text1}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text2}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(DeleteBanner);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5fffa',
        marginTop: 30,
        paddingBottom: 40,
        paddingLeft: 60,
        paddingRight: 110,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 6,
        paddingRight: 40,
        // marginRight: 100
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        // marginRight:130
    },
    back: {
        fontSize: 13,
        paddingLeft: 100,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',

    },
    options: {
        paddingTop: 10,
    },
    texts: {
        textAlign: 'left',
        paddingLeft: 1,
        paddingBottom: 20,
        fontSize: 25,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 200,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        textAlign: 'center',
        color: '#696969',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold',
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch: {
        padding: 30
    },
    text1: {
        textAlign: 'center',
        padding: 10,
        width: 100,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 30
    },
    text2: {
        textAlign: 'center',
        padding: 10,
        width: 100,
        height: 40,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 30,
        fontSize: 12,
        fontFamily: 'OpenSansSemiBold',
    }
});

