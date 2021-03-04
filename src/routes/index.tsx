import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '../screens/SingUp';
import SingIn from '../screens/SingIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EBEBEB' },
    }}
  >
    <Auth.Screen name="SingIn" component={SingIn} />
    <Auth.Screen name="SingUp" component={SingUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
