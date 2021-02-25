import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const SystemImages = [
  {
    id: 1,
    name: 'PlayStation',
    uri:
      'https://i.pinimg.com/564x/cc/06/20/cc0620fb3397724c867c88b1fd0ac41a.jpg',
  },
  {
    id: 2,
    name: 'PlayStation 2',
    uri:
      'https://www.every.pk/uploads/images/thumb/products/playstation-2-m75d069690905ff.jpg',
  },
  {
    id: 3,
    name: 'PlayStation 3',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sony-PlayStation-3-2001A-wController-L.jpg/1200px-Sony-PlayStation-3-2001A-wController-L.jpg',
  },
  {
    id: 4,
    name: 'PlayStation 4',
    uri:
      'https://i.pinimg.com/564x/a3/4d/ba/a34dbaff0b0f163712aaf93e60c2080f.jpg',
  },
  {
    id: 5,
    name: 'X Box',
    uri: 'https://www.nme.com/wp-content/uploads/2020/07/Xbox-Series-X.jpg',
  },
  {
    id: 6,
    name: 'XBox One',
    uri: 'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=MXO005ar',
  },
  {
    id: 7,
    name: 'XBox 360',
    uri:
      'https://i.pinimg.com/564x/eb/f8/63/ebf8638d9b27f1951d9ae9dced774b86.jpg',
  },
  {
    id: 8,
    name: 'Nintendo',
    uri: 'https://www.techinn.com/f/13734/137343676/nintendo-switch.jpg',
  },
  {
    id: 9,
    name: 'SuperNinten',
    uri:
      'https://blog.en.uptodown.com/files/2017/09/super-nintendo-featured-1280x720.jpg',
  },
  {
    id: 10,
    name: 'Nintendo 64',
    uri:
      'https://www.gannett-cdn.com/presto/2018/11/16/USAT/c42f3aee-f601-4076-bba2-6c1d9fcc02fc-DART15_1D_GAME2.jpg?crop=2395,1343,x0,y0&width=2395&height=1343&format=pjpg&auto=webp',
  },
  {
    id: 11,
    name: 'Sega',
    uri:
      'https://static-01.daraz.pk/original/f985d9926d2c9affcdb9b02c5d465763.jpg',
  },
]

export const SystemDoyouOwn = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          width: '70%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          left: '15%',
        }}
      >
        <Text
          style={{
            color: 'white',
            top: 60,
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'orange',
          }}
        >
          Pick Any System you own
        </Text>
      </View>
      <View style={styles.AllCard}>
        {SystemImages.map((url) => (
          <View key={url.id} style={styles.ImagesBox}>
            <TouchableOpacity onPress={() => navigation.navigate('TitlesTag')}>
              <ImageBackground
                source={{ uri: url.uri }}
                style={styles.Imager}
              ></ImageBackground>
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontFamily: 'serif',
                backgroundColor: 'white',
                opacity: 0.8,
                borderBottomRightRadius: 5,
              }}
            >
              {url.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    overflow: 'scroll',
  },
  txtSty: {
    color: 'white',
    marginTop: 25,
  },
  ImagesBox: {
    width: '30%',
    margin: 5,
    borderRadius: 105,
    textAlign: 'center',
  },
  Imager: {
    width: '100%',
    height: 100,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  AllCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15,
    marginTop: 80,
  },
})
