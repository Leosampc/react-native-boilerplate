import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '@/screens/Signup';

type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Signup" component={SignupScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
