import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  Alert,
  Platform,
  Modal,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Container,
  Card,
  Header,
  Content,
  CardItem,
  Body,
  DeckSwiper,
  Text,
  Footer,
  Icon,
  Item,
  Input,
  FooterTab,
  Button,
  Left,
  Right,
  Title,
  List,
  ListItem,
  Thumbnail,
} from 'native-base'
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { Grid, Row, Col } from 'react-native-easy-grid'

var { height, width } = Dimensions.get('window')
const equalWidth = width / 2

const Itemo = ({ note, reminder, status, noteid, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  return (
    <View>
      <Content padder>
        <Card>
          <CardItem header button onPress={() => alert('This is Card Header')}>
            <Text>
              Note: <Text style={{ fontWeight: 'bold' }}>{note}</Text>
            </Text>
          </CardItem>
          <CardItem button>
            <Body>
              <Text>reminder: {reminder}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Text>status : {status}</Text>
          </CardItem>
          <CardItem footer>
            <Button
              style={{
                backgroundColor: 'black',
                borderRadius: 25,
                width: 170,
              }}
              onPress={() => {
                setModalVisible(true)
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'serif',
                }}
              >
                {'         '}
                Update
              </Text>
            </Button>
          </CardItem>
        </Card>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  top: -28,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: 25,
                }}
              >
                Update Note
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
                  placeholder="NoteID"
                  keyboardType="default"
                  placeholderTextColor="gray"
                  value={noteid}
                  disabled
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
                  placeholder="Note"
                  keyboardType="default"
                  placeholderTextColor="gray"
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
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible)
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
                    {'       '}
                    Submit
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </Content>
    </View>
  )
}
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export const Note: React.FC<any> = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = React.useState('')
  const [notification, setNotification] = React.useState(false)
  const notificationListener = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const responseListener = React.useRef() as React.MutableRefObject<HTMLInputElement>
  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response)
      }
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener)
      Notifications.removeNotificationSubscription(responseListener)
    }
  }, [])

  React.useEffect(() => {
    registerfornotification()
      .then((token) => console.log(token))
      .catch((err) => console.log(err))
  })
  async function registerfornotification() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    if (status != 'granted') {
      alert('Fail to get the push token')
      return
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data
    return token
  }

  const renderItem = ({ item }) => (
    <Itemo
      note={item.note}
      reminder={item.reminder}
      status={item.status}
      noteid={item.noteid}
      navigation={navigation}
    />
  )
  const [getAllNote, setAllNote] = React.useState<any>()
  React.useEffect(() => {
    let formData = new FormData()
    formData.append(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2MTYxNDA4MDcsIm5iZiI6MTYxNjE0MDgxNywiZXhwIjoxNjE2MTQ0NDA3LCJhdWQiOiJ1c2VycyIsImRhdGEiOnsiaWQiOjcsInVzZXJuYW1lIjoiYmlsYWxAZ21haWwuY29tIn19.k9pFItbBVluvXF29oUcyfooquZCa376d8sbWiJVDwkMteupxgVHANwr6syTTt9_hwCOPxvchUibSgsO34k7ceA'
    )
    fetch('https://aic-developments.xyz/v1/get_single_note.php', {
      method: 'POST',
      body: formData,
    })
      .then((resp) => resp.json())
      .then((respJson) => {
        setAllNote(respJson)
        console.log('bilal', respJson)
      })
  }, [])

  async function schedulePushNotification() {
    getAllNote.map((all) => {
      console.log(all.reminder.slice(0, 1))
      Notifications.scheduleNotificationAsync({
        content: {
          title: all.note,
          body: all.status,
        },
        trigger: { seconds: all.noteid },
      })
    })
  }
  return (
    <ScrollView style={{ top: '6%' }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* <Text>Your expo push token: {expoPushToken}</Text> */}
        {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Title: {notification && notification.request.content.title}{' '}
          </Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
        </View> */}
      </View>
      <Grid style={{ bottom: 1 }}>
        <Col
          style={{
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
          }}
        ></Col>

        <Text style={{ padding: 10 }}>Home</Text>

        <Col
          style={{
            alignItems: 'flex-end',
            alignContent: 'flex-end',
            justifyContent: 'flex-end',
          }}
        ></Col>
      </Grid>
      <View>
        <Body style={{ borderBottomWidth: 0 }}>
          {/* <Text
            style={{
              fontSize: 14,
              color: 'black',
              left: -47,
            }}
          >
            {'what would you like to play'.toUpperCase()}
          </Text> */}
          <Item rounded style={{ width: '90%', backgroundColor: '#f7f7f7' }}>
            <Icon active name="search" />
            <Input placeholder="Search Note...." />
          </Item>
        </Body>
      </View>
      <Button
        onPress={async () => {
          await schedulePushNotification()
        }}
        style={{ backgroundColor: 'black', top: 10, marginHorizontal: 10 }}
      >
        <Text>Press to schedule a notification</Text>
      </Button>
      <View style={{ top: 10 }}>
        {/* {getAllNote.map((data) => {
          return (
          
          )
        })} */}
        <SafeAreaView>
          <FlatList
            data={getAllNote}
            renderItem={renderItem}
            keyExtractor={(data) => data.noteid.toString()}
          />
        </SafeAreaView>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  )
}

async function registerForPushNotificationsAsync() {
  let token
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log(token)
  } else {
    alert('Must use physical device for Push Notifications')
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  return token
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  TextMain: {
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
