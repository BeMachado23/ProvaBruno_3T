import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens/Home';
import { Agendamento } from '../../screens/Agendamento';
import { Listagem } from '../../screens/Listagem';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Menu">
      <Screen 
        name='Home' 
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Screen 
        name='Agendamento' 
        component={Agendamento}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name='Listagem'
        component={Listagem}
        options={{
          headerShown:true,
        }}
      />
    </Navigator>
  )
}