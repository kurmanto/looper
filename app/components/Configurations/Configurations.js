import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { confStyles } from './Styles'
import { StyleSheet, Text, View } from 'react-native';

const Configurations = () => {
  return (
        <View style={confStyles.settings}>
            <View style={confStyles.optionContainer}>
                <Text style={confStyles.label}>TEMPO </Text>
                <Text style={confStyles.optionValue}>120</Text>
            </View>
            <View style={confStyles.optionContainer}>
                <Text style={confStyles.label}>REC LENGTH </Text>
                <Text style={confStyles.optionValue}>1 BAR</Text>
            </View>
        </View>
  );
}

export default Configurations;
