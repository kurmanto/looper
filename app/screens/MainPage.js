import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { mainStyle } from './Styles';
import Configurations from '../components/Configurations/Configurations.js';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Icon } from 'react-native';

const MainPage = () => {
  return (
    <View style={mainStyle.container}>
        <TouchableOpacity style={mainStyle.myButton}/>
        <Configurations />
    </View>
  );
}

export default MainPage;
