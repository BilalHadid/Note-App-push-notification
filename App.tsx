import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './screens/Welcome'
import Register from './screens/Register'
import { TitlesTag } from './screens/TitlesTag'
import { Note } from './screens/Note'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Settings } from 'react-native'
import { AddButton } from './screens/AddButton'

const RootStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const DrawerNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Note') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings-outline' : 'settings-outline'
          } else if (route.name === 'Add Note') {
            iconName = focused ? 'add-outline' : 'add-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Note" component={Note} />
      <Tab.Screen name="Add Note" component={AddButton} />
    </Tab.Navigator>
  )
}

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />

            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
              }}
              name="TitlesTag"
              component={TitlesTag}
            />
            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
              }}
              name="HomeProvider"
              component={DrawerNavigation}
            />

            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
                headerTitle: 'Welcome To GameShop',
              }}
              name="Welcome"
              component={Welcome}
            />
            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
              }}
              name="Register"
              component={Register}
            />
          </RootStack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
