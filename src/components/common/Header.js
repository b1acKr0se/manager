import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

  render() {
    const { backgroundColor, height, fontSize, headerText } = this.props;
    return (
      <View style={[ styles.containerStyle, {backgroundColor: backgroundColor, height: height} ]}>
        <Text style={[ styles.text, {fontSize: fontSize} ]}>{headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '100',
    padding: 16
  },
  containerStyle: {
    justifyContent: 'flex-end',
    elevation: 1,
  }
});

export { Header };
