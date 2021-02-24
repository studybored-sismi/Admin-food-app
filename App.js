
import React, { useEffect, useState ,Component} from 'react';
//import { NavigationContainer,
 // DefaultTheme as NavigationDefaultTheme,
 // DarkTheme as NavigationDarkTheme,useTheme} from '@react-navigation/native';
 import {NavigationContainer,} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View ,Text} from 'react-native';
import { useFonts } from 'expo-font';


import restScreen from './screens/restScreen';
import regScreen from './screens/regScreen';
import reviewScreen from './screens/reviewScreen';
import tabScreen from './screens/tabScreen';
import foodScreen from './screens/foodScreen';
import detailScreen from './screens/detailScreen';
import confScreen from './screens/confScreen';
import EditScreen from './screens/EditScreen';
import deliveryTips from './screens/deliveryTips';
import deliveryBoy from './screens/deliveryBoy';
import deliveryRegScreen from './screens/delveryRegScreen';
import deliveryEditScreen from './screens/deliveryEditScreen';
import settings from './screens/settings';
import fontSize from './screens/fontSize';
import Mode from './screens/Mode';
import contact from './screens/contact';
import Feedback from './screens/Feedback';
import notification from './screens/notification';
import Map from './screens/Map';




const Stack = createStackNavigator();
export default function App() {

  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
 

  return (
   
   
         <NavigationContainer  >
            
      <Stack.Navigator>

      
           <Stack.Screen name="restScreen"
          component={restScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="regScreen"
          component={regScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="reviewScreen"
          component={reviewScreen}
          options={
            { headerShown: false }
          }
        />
    <Stack.Screen name="tabScreen"
          component={tabScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="foodScreen"
          component={foodScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="detailScreen"
          component={detailScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="confScreen"
          component={confScreen}
          options={
            { headerShown: false }
          }
        />
      
      <Stack.Screen name="EditScreen"
          component={EditScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="deliveryTips"
          component={deliveryTips}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="deliveryBoy"
          component={deliveryBoy}
          options={
            { headerShown: false }
          }
        />


<Stack.Screen name="deliveryRegScreen"
          component={deliveryRegScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="deliveryEditScreen"
          component={deliveryEditScreen}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="settings"
          component={settings}
          options={
            { headerShown: false }
          }
        />


  
<Stack.Screen name="fontSize"
          component={fontSize}
          options={
            { headerShown: false }
          }
        />


<Stack.Screen name="Mode"
          component={Mode}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="contact"
          component={contact}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="Feedback"
          component={Feedback}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="notification"
          component={notification}
          options={
            { headerShown: false }
          }
        />

<Stack.Screen name="Map"
          component={Map}
          options={
            { headerShown: false }
          }
        />


</Stack.Navigator>

    </NavigationContainer>

  
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

