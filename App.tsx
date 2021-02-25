import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import Home from './screens/Home'
import TabOneScreen from './screens/TabOneScreen'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './screens/Welcome'
import Register from './screens/Register'
import NewProfileProvider from './screens/NewProfileProvider'
import { SystemDoyouOwn } from './screens/SystemDoYouOwn'
import { TitlesTag } from './screens/TitlesTag'

const RootStack = createStackNavigator()
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
              name="TabOne"
              component={TabOneScreen}
            />
            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
              }}
              name="NewProfileProvider"
              component={NewProfileProvider}
            />
            <RootStack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: 'white',
              }}
              name="SystemDoYouOwn"
              component={SystemDoyouOwn}
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
