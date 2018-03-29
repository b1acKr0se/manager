import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return(
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={ size || 'large' } />
    </View>
  );
}

const styles = {
  spinnerStyle: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  }
}

export { Spinner };
