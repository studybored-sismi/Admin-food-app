
   import React from 'react';
   import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
   import Icon from 'react-native-vector-icons/Ionicons'
   import { useFonts } from 'expo-font';
   import { connect } from 'react-redux';
   import Logo from './Logo';
   
   const ActiveOrder = (props) => {
   
   
       return (
           <View style={styles.container}>
           {/* <Logo /> */}
           <View style={styles.head}>
               <TouchableOpacity style={styles.menu} onPress={() => props.navigation.navigate("Dashboard")}>
                   <Icon name="arrow-back" size={30} color="#FDC913" />
               </TouchableOpacity>
               <Text style={{ fontSize:props.fontSize,paddingRight:80,color: '#696969',marginTop:20,
           fontFamily: 'OpenSansBold',}}>Active Order</Text>
               {/* <Text style={styles.back} >Back</Text> */}
           </View>
   
               <View style={styles.body}>
                   <View style={styles.body1}>
                       <Text style={styles.number}>Order no: 01</Text>
                       <Text style={styles.date}>Date: 14/02/2021</Text>
                   </View>
                   <View style={styles.image1}>
                       <Image style={styles.image} source={require("../assets/burger.jpg")} />
                       <Text style={{  paddingTop: 20,fontSize:props.fontSize2,color: '#696969',
                        fontFamily: 'OpenSansBold'}}>Burger * 2 More</Text>

                       <Text style={{  padding: 3,fontSize:props.fontSize2,color: 'red',
                        fontFamily: 'OpenSansSemiBold'}}>Rs.0.00</Text>

                       <Text style={{padding: 7,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Payment : Cash</Text>

                       <Text style={{padding: 7,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Order Price : 0.0</Text>

                       <Text style={{padding: 7,fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>Contact User :</Text>

                       <Text style={{ fontSize:props.fontSize1,color: '#696969',
                        fontFamily: 'OpenSansSemiBold'}}>+91 123456789</Text>
                       <Text style={{color: 'green',fontSize:props.fontSize1,
                        fontFamily: 'OpenSansSemiBold'}}>Successfully ordered</Text>
                       <View style={styles.option}>
                           <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetails")}>
                               <Text style={styles.text} >Order Details</Text>
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


export default connect(mapStateToProps)(ActiveOrder);
   const styles = StyleSheet.create({
       container: {
           // backgroundColor: '#f5fffa',
           paddingBottom: '200%',
           alignItems: 'center'
       },
       head: {
           paddingTop:10,
           flexDirection: 'row',
           // backgroundColor: '#f5fffa',
           paddingBottom: 40,
           
       },
       menu: {
           marginTop:20,
           paddingRight:70,
           marginLeft:20
           // marginTop: 2,
           // marginRight: 4
       },
       dashboard: {
           fontSize: 25,
           paddingRight:80,
           color: '#696969',
           fontFamily: 'OpenSansBold',
          
       },
       back: {
           fontSize: 13,
           paddingLeft: 90,
           paddingTop: 4,
           color: '#696969',
           fontFamily: 'semibold'
       },
       body1: {
           flexDirection: 'row'
       },
       body: {
           flexDirection: 'column',
           backgroundColor: 'white',
           height: 520,
           width: 330,
           elevation: 8,
           borderRadius: 8,
           paddingTop: 10
       },   
       number: {
           paddingRight: 20,
           paddingLeft: 10,
           fontSize: 13,
           color: '#696969',
           fontFamily: 'OpenSansRegular'
       },
       date: {
           paddingLeft: 100,
           fontSize: 13,
           color: '#696969',
           fontFamily: 'OpenSansRegular'
       },
       image: {
           width: 250,
           height: 150,
           borderRadius: 10
       },
       image1: {
           alignItems: 'center',
           justifyContent: 'center',
           alignContent: 'center',
           paddingTop: 40
       },
       text1: {
           paddingTop: 20,
           fontSize: 20,
           color: '#696969',
           fontFamily: 'OpenSansBold'
       },
       text2: {
           padding: 3,
           fontSize: 20,
           color: 'red',
           fontFamily: 'OpenSansSemiBold'
       },
       text3: {
           padding: 7,
           fontSize: 14,
           color: '#696969',
           fontFamily: 'OpenSansSemiBold'
       },
       text4: {
           fontSize: 14,
           color: '#696969',
           fontFamily: 'OpenSansSemiBold'
       },
       text5: {
           color: 'green',
           fontSize: 14,
           fontFamily: 'OpenSansSemiBold'
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
       }
   });
   
   