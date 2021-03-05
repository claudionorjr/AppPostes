import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#EBEBEB" />
    <AppProvider>
      <View style={{ backgroundColor: '#EBEBEB', flex: 1 }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
