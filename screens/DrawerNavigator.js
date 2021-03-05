import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './Dashboard';
import Menu from './Menu';
import Restaurant from './restScreen';
import Delivery_Boy from './deliveryBoy';
import Offer from './Offer';
import Accounts from './Accounts';
import Settings from './settings';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#FDC913',
        itemStyle: { marginVertical: 5,paddingLeft:30 },
        labelStyle: {
          fontFamily: 'OpenSansBold',
          fontSize: 18
        },
        activeBackgroundColor: 'white',
        inactiveTintColor: '#696969',
        marginVertical: 40
      }}>
      <Drawer.Screen
        name="Dashboard"
        options={{ drawerLabel: 'Dashboard', }}
        component={Dashboard} />
      <Drawer.Screen
        name="Menu"
        options={{ drawerLabel: 'Menu' }}
        component={Menu} />
      <Drawer.Screen
        name="Restaurant"
        options={{ drawerLabel: 'Restaurant' }}
        component={Restaurant} />
      <Drawer.Screen
        name="Delivery_Boy"
        options={{ drawerLabel: 'Delivery_Boy' }}
        component={Delivery_Boy} />
      <Drawer.Screen
        name="Offers"
        options={{ drawerLabel: 'Offers' }}
        component={Offer} />
      <Drawer.Screen
        name="Accounts"
        options={{ drawerLabel: 'Accounts' }}
        component={Accounts} />
      <Drawer.Screen
        name="Settings"
        options={{ drawerLabel: 'Settings' }}
        component={Settings} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;