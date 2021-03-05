import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';

const Accounts2 = (props) => {


    return (
        <View style={styles.container}>
             <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => props.navigation.navigate("Dashboard")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={{fontSize: props.fontSize, paddingBottom: 5, color: '#696969',
                fontFamily: 'OpenSansBold',}}>Accounts</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.body2}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accounts")}>
                        <Text style={styles.button1}>Statements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accounts2")}>
                        <Text style={styles.button2}>Settlements</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body3}>
                    <TouchableOpacity style={styles.touched}>
                        <View style={styles.button4}>
                        <Text style={{textAlign: 'center',padding: 3, height: 30,borderColor: '#dddddd',
                    backgroundColor: '#fff',borderColor: '#696969',fontSize:props.fontSize1,
                    color: '#696969', borderRadius: 5,fontFamily: 'OpenSansSemiBold'}}>Total Amount</Text></View>

                        
                        <Text style={{fontSize:props.fontSize1, textAlign: 'center',
                                padding: 3, height: 30, borderColor: '#dddddd',
                                backgroundColor: '#fff',borderColor: '#696969',color: '#696969',
                                borderRadius: 5,fontFamily: 'OpenSansRegular'}}>To Restaurant</Text>
                        <Text style={{textAlign: 'center',padding: 3, height: 30,borderColor: '#dddddd',
                    backgroundColor: '#fff',borderColor: '#696969',fontSize:props.fontSize1,
                    color: '#696969', borderRadius: 5,fontFamily: 'OpenSansSemiBold'}}>Rs 200</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touched}>
                        <Text style={{textAlign: 'center',padding: 3, height: 30,borderColor: '#dddddd',
                    backgroundColor: '#fff',borderColor: '#696969',fontSize:props.fontSize1,
                    color: '#696969', borderRadius: 5,fontFamily: 'OpenSansSemiBold'}}>Total Amount</Text>

                        <Text style={{fontSize:props.fontSize1, textAlign: 'center',
                                padding: 3, height: 30, borderColor: '#dddddd',
                                backgroundColor: '#fff',borderColor: '#696969',color: '#696969',
                                borderRadius: 5,fontFamily: 'OpenSansRegular'}}>To Restaurant</Text>

                        <Text style={{textAlign: 'center',padding: 3, height: 30,borderColor: '#dddddd',
                    backgroundColor: '#fff',borderColor: '#696969',fontSize:props.fontSize1,
                    color: '#696969', borderRadius: 5,fontFamily: 'OpenSansSemiBold'}}>Rs 200</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => props.navigation.navigate("Settlementsummary")}>
                <Text style={{ textAlign: 'center',padding: 15,width: 330,height: 50,borderColor: '#dddddd',
                    backgroundColor: '#fff',elevation: 8,fontSize:props.fontSize1,color: '#696969',
                borderRadius: 8,fontFamily: 'OpenSansSemiBold'}}>Settlement summary</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) =>{
    const {fontSize,fontSize1} = state;
    return {fontSize,fontSize1};
};


export default connect(mapStateToProps)(Accounts2);
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#f5fffa',
        marginTop: 10,
        paddingBottom: 40,
        paddingLeft: 1,
        paddingRight: 100,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 5,
        paddingRight: 80,
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
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 300,
        width: 330,
        elevation: 8,
        borderRadius: 8
    },
    body2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 40
    },
    button1: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'OpenSansSemiBold'
    },
    button2: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 10,
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'OpenSansSemiBold'
    },
    body3: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button3: {
        textAlign: 'center',
        padding: 3,
        height: 30,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        borderColor: '#696969',
        fontSize: 14,
        color: '#696969',
        borderRadius: 5,
        fontFamily: 'OpenSansRegular'
    },
    button4: {
        textAlign: 'center',
        padding: 3,
        height: 30,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        borderColor: '#696969',
        fontSize: 14,
        color: '#696969',
        borderRadius: 5,
        
        fontFamily: 'OpenSansSemiBold'
    },
    touched: {
        paddingTop: 20,
        borderWidth: 1,
        fontSize: 14,
        borderColor: '#696969',
        width: 130,
        height: 150,
        padding: 10
    },
    touch: {
        padding: 30
    },
    button: {
        textAlign: 'center',
        padding: 15,
        width: 330,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 8,
        //fontSize:props.fontSize1,
        color: '#696969',
        borderRadius: 8,
        fontFamily: 'OpenSansSemiBold'
    }
});

