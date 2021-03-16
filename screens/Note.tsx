import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Grid, Row, Col } from 'react-native-easy-grid'

var { height, width } = Dimensions.get('window')
const equalWidth = width / 2
export const Note = ({ navigation }: any) => {
  return (
    <ScrollView style={{ top: '6%' }}>
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
      <View style={{ top: 10 }}>
        <Content padder>
          <Card>
            <CardItem
              header
              button
              onPress={() => alert('This is Card Header')}
            >
              <Text>
                Title: <Text style={{ fontWeight: 'bold' }}>AnyTitle</Text>
              </Text>
            </CardItem>
            <CardItem button>
              <Body>
                <Text>Message: Any message you add</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>15-03-2021</Text>
            </CardItem>
            <CardItem footer>
              <Button
                style={{
                  backgroundColor: 'black',
                  borderRadius: 25,
                  width: 170,
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
        </Content>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  )
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
})
