import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/ultil/AppNavigator';
import { AppContextProvider } from './src/ultil/AppContext';

import { Provider } from 'react-redux';
// import {store} from './src/redux2/stores/Stores';
import { store } from './src/redux2/stores/Stores';
const STRIPE_KEY = 'pk_test_51OAMNGANZv3Twwu9pzJzF1umKF8axh0rzphoESMxaGlGaIa0NDb1q4v18l8WugkxdR72EqNfzDrRKGr1VWv9N2Z400vuFz9UB4';

const App = () => {
  return (
    <Provider store={store}>
        <AppContextProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </AppContextProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
