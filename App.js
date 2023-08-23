import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import ItemCategory from './src/item_screen/ItemCategory';
import ItemFlashSale from './src/item_screen/ItemFlashSale';
import ItemProduct from './src/item_screen/ItemProduct';
import Offer from './src/screens/Offer';
import FavoriteProduct from './src/screens/FavoriteProduct';
import ItemFavoriteProduct from './src/item_screen/ItemFavoriteProduct';
import ProductDetail from './src/screens/ProductDetail';
import Notification from './src/screens/Notification';
import Explore from './src/screens/Explore';
import Cart from './src/screens/Cart';
import OfferScreen from './src/screens/OfferScreen';
import Account from './src/screens/Account';
import AppNavigator from './src/ultil/AppNavigator';
import { AppContextProvider } from './src/ultil/AppContext';
import Profile from './src/screens/Profile';
import Change_Name from './src/screens/Change_Name';
import Gender from './src/screens/Gender';
import BirthDay from './src/screens/BirthDay';
import Email from './src/screens/Email';
import Phone_Number from './src/screens/Phone_Number';
import Change_Password from './src/screens/Change_Password';
import Order from './src/screens/Order';
import Order_Detail from './src/screens/Order_Detail';
import Notification_Offer from './src/screens/Notification_Offer';
import Notification_Feed from './src/screens/Notification_Feed';
import Notification_Activity from './src/screens/Notification_Activity';
import Address from './src/screens/Address';
import Add_Address from './src/screens/Add_Address';
import Add_Payment from './src/screens/Add_Payment';
import CreaditCardAndDebit from './src/screens/CreaditCardAndDebit';
import Add_Card from './src/screens/Add_Card';
import CategoryScreen from './Demo/CategoryScreen';
import ItemColor from './Demo/ItemColor';

import { Provider } from 'react-redux';
// import {store} from './src/redux2/stores/Stores';
import {store} from './src/redux2/stores/Stores';
import ItemCart from './src/item_screen/ItemCart';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
      {/* <ItemCart/> */}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
