

import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import detailScreen from './detailScreen';
import foodScreen from './foodScreen';
import reviewScreen from './reviewScreen';
import confScreen from './confScreen';


const Tab = createBottomTabNavigator();

export default function tabScreen() {
    return (
        <Tab.Navigator initialRouteName="Restaurant details" tabBarOptions={{activeTintColor:"black"}}>
            <Tab.Screen
                name="Restaurant details"
                component={detailScreen}
                options={{
                    tabBarColor: 'black',
                    tabBarLabel: 'Restaurant details',
                    
                    
                  
                }}

            />
           
           <Tab.Screen
                name="Food Items"
                component={foodScreen}
                options={{

                    tabBarColor: 'black',
                    tabBarLabel: 'Food Items',
                  

                }} />

            <Tab.Screen
                name="Rating & Review"
                component={reviewScreen}
                options={{
                    tabBarColor: 'black',
                    tabBarLabel: 'Rating & Review',
                    
                }} />
         
         <Tab.Screen
                name="Configuration"
                component={confScreen}
                options={{

                    tabBarColor: 'black',
                    tabBarLabel: 'Configuration',
                   

                }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

});