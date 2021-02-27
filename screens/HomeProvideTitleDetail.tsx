import { View, StyleSheet } from 'react-native'
import React from 'react'
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
import Rating from '../components/Rating'

export const HomeProvideTitleDetail = () => {
  return (
    <View style={styles.container}>
      <Card style={{ width: '90%', height: 200, padding: 20 }}>
        <Text style={styles.textOnly}>Title: {'Gta Vice City V'}</Text>
        <Text style={styles.textOnly}>Day Rented: {'18 - 10 - 2021'}</Text>
        <Rating />
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOnly: {
    fontFamily: 'serif',
  },
})
