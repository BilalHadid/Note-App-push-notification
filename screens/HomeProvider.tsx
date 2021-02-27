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
import { DrawerActions } from '@react-navigation/native'

var { height, width } = Dimensions.get('window')
const equalWidth = width / 2
export const HomeProvider = ({ navigation }: any) => {
  return (
    <ScrollView style={{ top: '6%' }}>
      <Grid style={{ bottom: 1 }}>
        <Col
          style={{
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="md-menu" style={{ fontSize: 27, color: 'black' }} />
          </TouchableOpacity>
        </Col>

        <Text>Home</Text>

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
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              left: -47,
            }}
          >
            {/* Feture recipe */}
            {'what would you like to play'.toUpperCase()}
          </Text>
          <Item rounded style={{ width: '90%', backgroundColor: '#f7f7f7' }}>
            <Icon active name="search" />
            <Input placeholder="Search game...." />
          </Item>
        </Body>
      </View>
      <View style={{ top: 10 }}>
        <Content>
          <List>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeProvideTitleDetail')}
            >
              <ListItem>
                <Left>
                  <Text>Simon Mignolet</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem>
                <Left>
                  <Text>Nathaniel Clyne</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem>
                <Left>
                  <Text>Dejan Lovren</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
          </List>
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
