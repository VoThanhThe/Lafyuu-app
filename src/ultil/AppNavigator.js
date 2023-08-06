import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Explore from '../screens/Explore';
import Cart from '../screens/Cart';
import OfferScreen from '../screens/OfferScreen';
import {AppContext} from './AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Offer from '../screens/Offer';
import ProductDetail from '../screens/ProductDetail';
import Notification from '../screens/Notification';
import FavoriteProduct from '../screens/FavoriteProduct';
import Order_Detail from '../screens/Order_Detail';
import Profile from '../screens/Profile';
import Change_Name from '../screens/Change_Name';
import Gender from '../screens/Gender';
import BirthDay from '../screens/BirthDay';
import Email from '../screens/Email';
import Phone_Number from '../screens/Phone_Number';
import Change_Password from '../screens/Change_Password';
import Order from '../screens/Order';
import Address from '../screens/Address';
import Add_Address from '../screens/Add_Address';
import Add_Payment from '../screens/Add_Payment';
import Add_Card from '../screens/Add_Card';
import CreaditCardAndDebit from '../screens/CreaditCardAndDebit';

import Notification_Offer from '../screens/Notification_Offer';
import Notification_Feed from '../screens/Notification_Feed';
import Notification_Activity from '../screens/Notification_Activity';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const User = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="NotificationStack" component={NotificationStack} />
      <Stack.Screen name="FavoriteProduct" component={FavoriteProduct} />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen
        name="Notification_Activity"
        component={Notification_Activity}
      />
      <Stack.Screen name="Notification_Feed" component={Notification_Feed} />
      <Stack.Screen name="Notification_Offer" component={Notification_Offer} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AccountStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountStack" component={Account} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Change_Name" component={Change_Name} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="BirthDay" component={BirthDay} />
      <Stack.Screen name="Phone_Number" component={Phone_Number} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Change_Password" component={Change_Password} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Order_Detail" component={Order_Detail} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Add_Address" component={Add_Address} />
      <Stack.Screen name="Add_Payment" component={Add_Payment} />
      <Stack.Screen name="Add_Card" component={Add_Card} />
      <Stack.Screen
        name="CreaditCardAndDebit"
        component={CreaditCardAndDebit}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          } else if (route.name === 'OfferScreen') {
            iconName = focused ? 'ios-pricetag' : 'ios-pricetag-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#40BFFF',
        tabBarInactiveTintColor: '#4E4B66',
        tabBarLabelStyle: {
          fontSize: 14,
          color: '#4E4B66',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} title='Home' />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} options={{tabBarBadge: 2}} />
      <Tab.Screen
        name="OfferScreen"
        component={OfferScreen}
        options={{title: 'Offer'}}
      />
      <Tab.Screen name="Account" component={AccountStack}/>
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  const {isLogin} = useContext(AppContext);
  return <>{isLogin == false ? <User /> : <BottomTab />}</>;
};

export default AppNavigator;

const styles = StyleSheet.create({});
