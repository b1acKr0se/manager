import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { textInputStyle, labelStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        style={textInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  textInputStyle: {
    flex: 1,
    fontSize: 18,
    paddingRight: 16,
    paddingLeft: 16,
  },
  containerStyle: {
    flexDirection: 'row',
    height: 50,
    flex: 1,
    alignItems: 'center',
  }
}

export { Input };
