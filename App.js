import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/ultil/AppNavigator';
import { AppContextProvider } from './src/ultil/AppContext';

import { Provider } from 'react-redux';
// import {store} from './src/redux2/stores/Stores';
import {store} from './src/redux2/stores/Stores';
import Search from './src/screens/Search';
import ListCategory from './src/screens/ListCategory';

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
