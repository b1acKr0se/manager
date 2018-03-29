import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {
  const { touchableStyle, textStyle } = styles;
  return(
    <TouchableOpacity
    onPress={ onPress }
    style={touchableStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  touchableStyle: {
    margin: 16,
    borderWidth: 1,
    padding: 16,
    backgroundColor: 'beige',
    borderColor: 'beige',
    borderRadius: 5,
    elevation: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  }
}

export { Button };
