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
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Label,
  Button,
} from 'native-base'
import { Colors } from 'react-native/Libraries/NewAppScreen'
// const welcomeSVG = require('../assets/fonts/welcome.svg')
const img = require('../assets/images/LLogo2.png')

export default function Welcome({ navigation }: any) {
  const [value, onChangeText] = React.useState('UserName')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [userNmae, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [respData, setRespData] = React.useState()
  const [respStatus, setRespStatus] = React.useState()

  React.useEffect(() => {
    async function anyName() {
      let formData = new FormData()
      formData.append('username', userNmae)
      formData.append('password', password)
      await fetch('https://aic-developments.xyz/v1/login_user.php', {
        method: 'POST',
        body: formData,
      })
        .then((resp) => resp.json())
        .then((respJSon) => {
          console.log('email', email, 'password', pass)

          console.log(respJSon)
          setRespData(respJSon.messege)
          setRespStatus(respJSon.status)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    anyName()
  })
  const submitEmail = async () => {
    const mail = email
    const passw = pass
    await setUsername(mail)
    await setPassword(passw)

    // const newLogin: any = { email1: mail, pass1: passw }
    // setLogin(newLogin)
    if (respStatus === 1) {
      navigation.navigate('HomeProvider')
      alert(respData)
    } else {
    }
  }
  // const SubmitPassword = (e) => {
  //   e.preventDefault()
  //   setPass(e.target.value)
  // }
  // const onSubmit = () => {
  //   console.log(email)
  //   console.log(pass)
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? 'height' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={{ marginTop: '-55%' }}>
          <Image source={img} style={{ width: 200, height: 200 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 30,
            borderWidth: 2,
            marginTop: 10,

            overflow: 'visible',
          }}
        >
          <Input
            placeholder="UserName"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'yellow',
              textTransform: 'lowercase',
              textDecorationLine: 'none',
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
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'yellow',
              textTransform: 'lowercase',
              textDecorationLine: 'none',
            }}
          />
        </View>
        <View style={{ top: 20 }}>
          <Button style={styles.btnWelcome} onPress={submitEmail}>
            <Text style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
              {'                '}Sign In
            </Text>
          </Button>
        </View>
        <View style={{ top: 50 }}>
          <Text style={{ color: 'white' }}>
            New User?
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                navigation.navigate('Register')
              }}
            >
              {' '}
              Register{' '}
            </Text>
            Here
          </Text>
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
    backgroundColor: 'white',
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
    color: 'gray',
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
})
