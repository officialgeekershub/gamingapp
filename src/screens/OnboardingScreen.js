import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/images/misc/gaming.svg';


const OnboardingScreen = ({navigation}) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#20315f',
              fontFamily: 'Inter-Bold',
            }}>
            GAMEON
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <GamingImg
            width={300}
            height={300}
            style={{transform: [{rotate: '-15deg'}]}}
          />
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
          style={{
            backgroundColor: 'purple',
            padding: 20,
            width: '90%',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Roboto-MediumItalic',
            }}>
            Let's Begin
          </Text>
          <Icon name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default OnboardingScreen;