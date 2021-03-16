import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
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

export const AddButton = ({ navigation }) => {
  const [selected2, setSelect2] = React.useState()
  const [System, setSystem] = React.useState()
  const [Delivery, setDelivery] = React.useState()
  const [Pick_up, setPick_up] = React.useState()
  const [dateSet, setDate] = React.useState('09-1-2021')

  const onValueChange2 = (value: any) => {
    setSelect2(value)
  }
  const onValueChange3 = (value: any) => {
    setSystem(value)
  }
  const onValueChange4 = (value: any) => {
    setDelivery(value)
  }
  const onValueChange5 = (value: any) => {
    setPick_up(value)
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
          placeholder="Message Title"
          keyboardType="default"
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
          marginHorizontal: 20,
          marginTop: 10,
          width: equalWidth,
          overflow: 'visible',
        }}
      >
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Message Body" />
          </Form>
        </Content>
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
