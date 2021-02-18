
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import restScreen from './screens/restScreen';
import regScreen from './screens/regScreen';
import reviewScreen from './screens/reviewScreen';
import tabScreen from './screens/tabScreen';
import foodScreen from './screens/foodScreen';
import detailScreen from './screens/detailScreen';
import confScreen from './screens/confScreen';


const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      
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

</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

