/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import AddUser from '../screens/addUser';
import EditDeleteUser from '../screens/editDeleteUser';
import UserList from '../screens/listUser';
import { RootStackParamList } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="AddUser" component={AddUser} />
      <Stack.Screen name="EditDeleteUser" component={EditDeleteUser} />
    </Stack.Navigator>
  );
}
