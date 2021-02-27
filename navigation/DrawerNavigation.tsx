import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Register from '../screens/Register'

const Drawer = createDrawerNavigator()
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeProvider">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation
