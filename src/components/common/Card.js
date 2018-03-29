import React, { Component } from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'column',
    borderRadius: 2,
    backgroundColor: 'ivory',
    elevation: 1,
    margin: 16,
    marginBottom: 0,
  },
};

export { Card };
