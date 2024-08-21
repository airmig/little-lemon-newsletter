import * as React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { documentStyles } from '../utils/sytle';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <><View style={documentStyles.containerTop}>
            <Image style={documentStyles.logo} source={require('../assets/little-lemon-logo.png')}/>
          </View>
          <View style={documentStyles.containerMiddle}>
            <Text style={documentStyles.welcomeText}>Little Lemon, your local</Text>
            <Text style={documentStyles.welcomeText}> Meditteranean Bistro</Text>
          </View>
          <View style={documentStyles.containerBottom}>
            <Pressable style={documentStyles.button} onPress={()=>navigation.navigate('Subscribe')}>
              <Text style={documentStyles.buttonText}>Newsletter</Text>
            </Pressable>
        </View></>;
};

export default WelcomeScreen;
