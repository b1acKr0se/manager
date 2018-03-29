import React, { Component } from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return(
    <View style={[ styles.containerStyle, {padding: props.padding} ]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

export { CardSection };
