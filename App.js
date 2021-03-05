import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';


//import SplashScreen from './screen/SplashScreen'
//import Login from './screen/Login'
//import Signup from './screen/Signup'
import DrawerNavigator from './screens/DrawerNavigator';
import Category from './screens/Category';
import AddCategory from './screens/AddCategory';
import AddMenu from './screens/AddMenu';
import FoodItems from './screens/FoodItems';
import AddFoodItems from './screens/AddFoodItems';
import Menu from './screens/Menu';
import EditMenu from './screens/EditMenu';
import EditCategory from './screens/EditCategory';
import EditFoodItems from './screens/EditFoodItems';
import SubAdmins from './screens/SubAdmins';
import AddSubAdmins from './screens/AddSubAdmins';
import SubAdminsDetails from './screens/SubAdminsDetails';
import EditSubAdmins from './screens/EditSubAdmins';
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
import Dashboard from './screens/Dashboard';
import PendingOrder from './screens/PendingOrder';
import OrderDetails from './screens/OrderDetails';
import ActiveOrder from './screens/ActiveOrder';
import GraphicReport from './screens/GraphicReport';
import Offer from './screens/Offer';
import Block from './screens/Block';
import Banner from './screens/Banner';
import Coupon from './screens/Coupon';
import AddBanner from './screens/AddBanner';
import EditBanner from './screens/EditBanner';
import DeleteBanner from './screens/DeleteBanner';
import AddCoupon from './screens/AddCoupon';
import EditCoupon from './screens/EditCoupon';
import DeleteCoupon from './screens/DeleteCoupon';
import Accounts from './screens/Accounts';
import Accounts2 from './screens/Accounts2';
import Settlementsummary from './screens/Settlementsummary';
import RestDetails from './screens/RestDetails'

import { store } from './reduxConfig/store';
import { Provider } from 'react-redux'
//import {createStore} from 'redux'


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
   
    <Provider store={store}>
         <NavigationContainer  >
            
      <Stack.Navigator>

      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Dashboard" component={Dashboard}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Menu" component={Menu}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="AddMenu" component={AddMenu}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="EditMenu" component={EditMenu}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Category" component={Category}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="AddCategory" component={AddCategory}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="EditCategory" component={EditCategory}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="FoodItems" component={FoodItems}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="AddFoodItems" component={AddFoodItems}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="EditFoodItems" component={EditFoodItems}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="SubAdmins" component={SubAdmins}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="SubAdminsDetails" component={SubAdminsDetails}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="AddSubAdmins" component={AddSubAdmins}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="EditSubAdmins" component={EditSubAdmins}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Block" component={Block}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="RestDetails" component={RestDetails}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="restScreen" component={restScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="regScreen" component={regScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="reviewScreen" component={reviewScreen}
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name="tabScreen" component={tabScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="foodScreen" component={foodScreen}
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

        <Stack.Screen name="confScreen" component={confScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="EditScreen" component={EditScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="deliveryTips" component={deliveryTips}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="deliveryBoy" component={deliveryBoy}
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name="deliveryRegScreen" component={deliveryRegScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="deliveryEditScreen" component={deliveryEditScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="settings" component={settings}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="fontSize" component={fontSize}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="Mode" component={Mode}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="contact" component={contact}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="Feedback" component={Feedback}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="notification" component={notification}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="Map" component={Map}
          options={
            { headerShown: false }
          }
        />


        <Stack.Screen name="PendingOrder" component={PendingOrder}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="OrderDetails" component={OrderDetails}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="ActiveOrder" component={ActiveOrder}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="GraphicReport" component={GraphicReport}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Offer" component={Offer}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Banner" component={Banner}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Coupon" component={Coupon}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="AddBanner" component={AddBanner}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="EditBanner" component={EditBanner}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="DeleteBanner" component={DeleteBanner}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="AddCoupon" component={AddCoupon}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="EditCoupon" component={EditCoupon}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="DeleteCoupon" component={DeleteCoupon}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Accounts" component={Accounts}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Accounts2" component={Accounts2}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="Settlementsummary" component={Settlementsummary}
          options={
            { headerShown: false }
          } />

           


</Stack.Navigator>

    </NavigationContainer>
          </Provider>
  
   
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

