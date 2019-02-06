import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignUpScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppStack = createStackNavigator({ Main: MainTabNavigator,});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  



// export default createAppContainer(createSwitchNavigator({
//   Main: MainTabNavigator,



}));