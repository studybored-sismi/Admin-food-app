import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';
import PendingOrder from './PendingOrder';
import OrderDetails from './OrderDetails';
import ActiveOrder from './ActiveOrder';
import GraphicReport from './GraphicReport';
import Offer from './Offer';
import Banner from './Banner';
import Coupon from './Coupon';
import AddBanner from './AddBanner';
import EditBanner from './EditBanner';
import DeleteBanner from './DeleteBanner';
import AddCoupon from './AddCoupon';
import EditCoupon from './EditCoupon';
import DeleteCoupon from './DeleteCoupon';
import Accounts from './Accounts';
import Accounts2 from './Accounts2';
import Settlementsummary from './Settlementsummary';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard"
        component={Dashboard}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="PendingOrder"
        component={PendingOrder}
        options={
          { headerShown: false }
        } />
      <Stack.Screen name="OrderDetails"
        component={OrderDetails}
        options={
          { headerShown: false }
        } />
      <Stack.Screen name="ActiveOrder"
        component={ActiveOrder}
        options={
          { headerShown: false }
        } />
      <Stack.Screen name="GraphicReport"
        component={GraphicReport}
        options={
          { headerShown: false }
        } />
              <Stack.Screen name="Offer"
        component={Offer}
        options={
          { headerShown: false }
        } />
          <Stack.Screen name="Banner"
        component={Banner}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="Coupon"
        component={Coupon}
        options={
          { headerShown: false }
        } />
          <Stack.Screen name="AddBanner"
        component={AddBanner}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="EditBanner"
        component={EditBanner}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="DeleteBanner"
        component={DeleteBanner}
        options={
          { headerShown: false }
        } />
        <Stack.Screen name="AddCoupon"
        component={AddCoupon}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="EditCoupon"
        component={EditCoupon}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="DeleteCoupon"
        component={DeleteCoupon}
        options={
          { headerShown: false }
        } />
         <Stack.Screen name="Accounts"
        component={Accounts}
        options={
          { headerShown: false }
        } />
        <Stack.Screen name="Accounts2"
        component={Accounts2}
        options={
          { headerShown: false }
        } />
        <Stack.Screen name="Settlementsummary"
        component={Settlementsummary}
        options={
          { headerShown: false }
        } />
    </Stack.Navigator>
  );
}
export default StackNavigator;