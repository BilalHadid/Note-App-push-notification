import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { CheckBox, ListItem, Body, Input } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const TitlesTag: React.FC<any> = ({ navigation }) => {
  const [check, setCheck] = React.useState(false)
  const [data, setData] = React.useState('')
  const [tags, setTags] = React.useState({ tager: 'Many' })

  const saveData = (e) => {
    e.preventDefault()
    setData(e.target.value)
  }

  const toggle: any = () => {
    setCheck(check === false ? true : false)
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontFamily: 'serif', fontSize: 25 }}>
        Titles you Own
      </Text>
      <TouchableOpacity onPress={() => setCheck(toggle)}>
        <ListItem style={{ width: 300 }}>
          <CheckBox checked={check} color="green" />
          <Body>
            <Text style={styles.txtAll}> {'   '}Grand Theft auto V</Text>
          </Body>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheck(toggle)}>
        <ListItem style={{ width: 300 }}>
          <CheckBox checked={check} color="green" />
          <Body>
            <Text style={styles.txtAll}> {'   '}Red dead redemption</Text>
          </Body>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheck(toggle)}>
        <ListItem style={{ width: 300 }}>
          <CheckBox checked={check} color="green" />
          <Body>
            <Text style={styles.txtAll}> {'   '}skyrim</Text>
          </Body>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheck(toggle)}>
        <ListItem style={{ width: 300 }}>
          <CheckBox checked={check} color="green" />
          <Body>
            <Text style={styles.txtAll}> {'   '}overwatch</Text>
          </Body>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheck(toggle)}>
        <ListItem style={{ width: 300 }}>
          <CheckBox checked={check} color="green" />
          <Body>
            <Text style={styles.txtAll}> {'   '}Call off duty</Text>
          </Body>
        </ListItem>
      </TouchableOpacity>
      <Text
        style={{ color: 'white', fontFamily: 'serif', fontSize: 25, top: 10 }}
      >
        Gamertags
      </Text>
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
          placeholder="GamerTag"
          keyboardType="default"
          placeholderTextColor="gray"
          onChange={(e) => saveData(e)}
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
      <TouchableOpacity
        style={styles.btnWelcome}
        onPress={() => navigation.navigate('HomeProvider')}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: 20,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
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
  txtAll: {
    color: 'white',
  },
  btnWelcome: {
    backgroundColor: 'orange',
    color: 'black',
    padding: '3%',
    borderRadius: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
    width: 200,
    top: 10,
  },
})
