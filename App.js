import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';

import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAzMjFmiedQq9QO-xcijNfiDdMlwJQLXqo",
      authDomain: "manager-b5e42.firebaseapp.com",
      databaseURL: "https://manager-b5e42.firebaseio.com",
      projectId: "manager-b5e42",
      storageBucket: "manager-b5e42.appspot.com",
      messagingSenderId: "316154656133"
    };

    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <View style={styles.backgroundStyle}>
          <StatusBar
            backgroundColor='beige'
            barStyle='dark-content'
          />
          <View style={{paddingBottom: 150}}>
            <Text style={styles.introTextStyle}>Sign in to access your console</Text>
            <LoginForm />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: 'beige',
    flex: 1,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  introTextStyle: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 24
  }
}

export default App;
