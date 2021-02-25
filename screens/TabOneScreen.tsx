import * as React from 'react'
import { StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

const img = require('../assets/images/transpLogo.png')

export default function TabOneScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.topHead}> */}
      <Image source={img} style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>
        Welcome,{'\n'}
        To Game shop App
      </Text>

      {/* </View> */}
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.btnWelcome}>Rent Your Games</Text>
      </TouchableOpacity>
      <Text>{'   '}</Text>
      <TouchableOpacity>
        <Text style={styles.btnWelcome}>Rent Games</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    top: -25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  topHead: {
    width: '70%',
    backgroundColor: 'black',
    margin: 25,
  },
  btnWelcome: {
    backgroundColor: 'orange',
    color: 'black',
    padding: 25,
    textAlign: 'center',
    width: 200,
    borderRadius: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
})
