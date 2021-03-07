import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '../screens/SingUp';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#181818' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SingUp" component={SingUp} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
  </Auth.Navigator>
);

export default AuthRoutes;
