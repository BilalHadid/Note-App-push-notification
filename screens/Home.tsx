import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet,ImageBackground,Text,View,Alert,Modal,TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Text, View } from '../components/Themed';
const imag = require('../assets/images/LastBack.png')

export default function Home({navigation}:any) {
    const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
        <ImageBackground source={imag} style={styles.image}>
        <View style={styles.MainHead}>
          <Text style={styles.TopHead}>Welcome To GameShop</Text>
        </View>
        <View style={styles.Button}>
            <TouchableOpacity onPress={() => navigation.navigate('TabOne')}>
              <Text style={styles.btnWelcome}>Get Started</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        flex: 1,
        width:'100%',
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      btnWelcome:{
        backgroundColor:'white',
        color:'black',
        padding:"5%",
        textAlign:'center',
        width:"45%",
        borderRadius:25,
        fontFamily:'serif',
        fontWeight:'bold'
    
      },
      Button:{
        top:"35%",
        left:"30  %"
      },
      TopHead:{
        color:'white',
        fontSize: 20,
        textAlign:'center',
        fontFamily:'serif'
      },
      MainHead:{
        top:"-35%",
      }
  
});
