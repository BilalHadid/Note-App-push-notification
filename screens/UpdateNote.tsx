import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import shortid from 'shortid'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Input,
  Icon,
  Label,
  Button,
  Textarea,
} from 'native-base'

import DatePicker from 'react-native-datepicker'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Navigation from '../navigation'

var { height, width } = Dimensions.get('window')
const equalWidth = width / 1.1
const centerWidth = width / 5

export const UpdateNote = ({ navigation }) => {
  const [selected2, setSelect2] = React.useState()
  const [respStatus, setRespStatus] = React.useState('')
  const [Note, setNote] = React.useState('')
  const [reminder, setReminder] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [NoteData, setNoteDate] = React.useState('')
  const [remind, setremind] = React.useState('')
  const [Stat, setStat] = React.useState('')

  React.useEffect(() => {
    async function addNote() {
      let formData = new FormData()
      formData.append(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2MTYwOTQ4MjgsIm5iZiI6MTYxNjA5NDgzOCwiZXhwIjoxNjE2MDk4NDI4LCJhdWQiOiJ1c2VycyIsImRhdGEiOnsiaWQiOjcsInVzZXJuYW1lIjoiYmlsYWxAZ21haWwuY29tIn19.wWj9nuRP8woURBVxGEekpbMR80UVYoF3pTlGe097DQKIQcxAFkMVgS63FVgr6GMb_lRZJsBPzPeaOg9UZxwAXg'
      )
      formData.append('note', NoteData)
      formData.append('reminder', remind)
      formData.append('status', Stat)
      fetch('https://aic-developments.xyz/v1/add_note.php', {
        method: 'POST',
        body: formData,
      })
        .then((resp) => resp.json())
        .then((respOp) => {
          console.log(respOp)
          setSelect2(respOp.messege)
          setRespStatus(respOp.status)
        })
    }
    addNote()
  })
  const submitEmail = () => {
    const Noter = Note
    const remindero = reminder
    const statuso = status
    setNoteDate(Noter)
    setremind(remindero)
    setStat(statuso)
    if (selected2 == 'Access denied') {
      alert(selected2)
    } else {
      alert(selected2)
    }
  }

  return (
    <ScrollView>
      <Header transparent />
      <Text
        style={{
          top: -28,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'serif',
          fontSize: 25,
        }}
      >
        Add Note
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginTop: 10,
          width: equalWidth,
          overflow: 'visible',
        }}
      >
        <Input
          placeholder="Note"
          keyboardType="default"
          placeholderTextColor="gray"
          onChangeText={(text) => setNote(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: 'white',
            color: 'black',
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
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginTop: 10,
          width: equalWidth,
          overflow: 'visible',
        }}
      >
        <Input
          keyboardType="decimal-pad"
          placeholderTextColor="gray"
          placeholder="Reminder"
          onChangeText={(text) => setReminder(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: 'white',
            color: 'black',
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
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginTop: 10,
          width: equalWidth,
          overflow: 'visible',
        }}
      >
        <Input
          placeholder="Status"
          keyboardType="default"
          placeholderTextColor="gray"
          onChangeText={(text) => setStatus(text)}
          style={{
            borderBottomWidth: 1,
            borderColor: 'white',
            color: 'black',
            textTransform: 'lowercase',
            textDecorationLine: 'none',
            fontFamily: 'serif',
          }}
        />
      </View>
      {/* <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginHorizontal: 30,
          //   borderWidth: 2,
          marginTop: 10,
        }}
      >
        <Label style={{ color: 'gray', fontFamily: 'serif' }}>
          Time Available
        </Label>
        <DatePicker
          style={styles.datePickerStyle}
          date={dateSet} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //   display: 'none',
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
      </View> */}

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 25,
        }}
      >
        <Button
          style={{
            backgroundColor: 'black',
            borderRadius: 25,
            width: 170,
            marginHorizontal: centerWidth,
          }}
          onPress={submitEmail}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          >
            {'              '}
            Submit
          </Text>
        </Button>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerStyle: {
    width: equalWidth,
    marginTop: 20,
  },
})
