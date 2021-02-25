import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Alert,
  Platform,
  Modal,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Linking,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Content, Form, Item, Input, Icon, Label, Button } from 'native-base'
import DatePicker from 'react-native-datepicker'
import { Colors } from 'react-native/Libraries/NewAppScreen'

// const welcomeSVG = require('../assets/fonts/welcome.svg')
const img = require('../assets/images/transpLogo.png')

export default function NewProfileProvider({ navigation }: any) {
  const [value, onChangeText] = React.useState('UserName')
  const [date, setDate] = React.useState('09-10-2020')
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? 'height' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={{ marginTop: '-30%' }}>
          <Image source={img} style={{ width: 200, height: 200 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 30,
            borderWidth: 2,
            marginTop: -25,

            overflow: 'visible',
          }}
        >
          <Input
            placeholder="Name"
            placeholderTextColor="gray"
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'yellow',
              textTransform: 'lowercase',
              textDecorationLine: 'none',

              fontFamily: 'serif',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 30,
            borderWidth: 2,
            marginTop: 10,
          }}
        >
          <Input
            placeholder="Phone Number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'yellow',
              textTransform: 'lowercase',
              textDecorationLine: 'none',
              fontFamily: 'serif',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginHorizontal: 30,
            borderWidth: 2,
            marginTop: 10,
          }}
        >
          <Label style={{ color: 'gray', fontFamily: 'serif' }}>
            Date of Birth
          </Label>
          <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date: any) => {
              setDate(date)
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 30,
            borderWidth: 2,
            marginTop: 10,
          }}
        >
          <Input
            placeholder="Address"
            placeholderTextColor="gray"
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'yellow',
              textTransform: 'lowercase',
              textDecorationLine: 'none',
              fontFamily: 'serif',
            }}
          />
        </View>
        <View style={{ top: 20 }}>
          <Button
            style={styles.btnWelcome}
            onPress={() => navigation.navigate('SystemDoYouOwn')}
          >
            <Text style={{ color: 'white', fontSize: 15 }}>
              What System Do you Know
            </Text>
          </Button>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>
            By creating an account,you agree to our terms and Service and
            Privacy Policy
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    padding: '10%',
    borderRadius: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
    width: 255,
  },
  inputBox: {
    width: '90%',
  },
  hyperlinkStyle: {
    color: 'orange',
  },
  bottomView: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 300,
    marginTop: 20,
  },
})
