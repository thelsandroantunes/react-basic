/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import { gertecReact } from "./src/react-native-main";
const gertecReact = require('./src/react-native-main');

const App: () => React$Node = () => {
  return (
    <>
      
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', height: 50}}>Ler código de barras</Text>
        </View>
    
        <View style={styles.fixToText}>        
           
          <Button title="EAN 8" onPress={() =>  gertecReact.codeBarEan8() } />
          <Button title="EAN 13" onPress={() =>  gertecReact.codeBarEan13()} />
          <Button title="EAN 14" onPress={() =>  gertecReact.codeBarEan14()} />
          <Button title="QRCODE" onPress={() =>  gertecReact.codeBarQrCode()} />
            
          
        </View>
       
        <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" , marginTop: 20}} />          
        
      </SafeAreaView>  

    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginStart: 15,
    marginEnd: 15,
  },
  item: {
    flexDirection: 'row',

  
   
  
  },
});

export default App;
