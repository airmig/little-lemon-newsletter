import * as React from 'react';
import { Image, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';
import { documentStyles } from '../utils/sytle';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function submitEmail(){
      if (validateEmail(email)){
        setError('');
        setEmail('');
        Alert.alert('Thanks for subscribing, stay tuned!')
      }
  }

  return <>
          <View style={documentStyles.subscribeTop}>
            <Image style={documentStyles.logo} source={require('../assets/little-lemon-logo-grey.png')}/>
          </View>
          <View style={documentStyles.subscribeMiddle}>
             <Text style={documentStyles.subscribeText}>Subscribe to our newsletters for our</Text>
              <Text style={documentStyles.subscribeText}>latest delicious recipes!</Text>
              <View style={documentStyles.inputView}>
                  <TextInput style={documentStyles.input} value={email} onChangeText={setEmail} placeholder="Type your email"/>
                  <View style={documentStyles.buttonView}>
                  { !validateEmail(email) && <Pressable style={documentStyles.buttonDisabled}><Text style={documentStyles.buttonText}>Subscribe</Text></Pressable>}
                  { validateEmail(email) && <Pressable style={documentStyles.buttonSubscribe} onPress={submitEmail}><Text style={documentStyles.buttonText}>Subscribe</Text></Pressable>}
                  </View>
              </View>
          </View>
        </>
};

export default SubscribeScreen;
