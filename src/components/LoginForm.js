import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder={'Email'} />
        </CardSection>
        <View style={{borderBottomWidth: 1, borderColor: 'black', opacity: 0.12}} />
        <CardSection>
          <Input
            placeholder={'Password'}
            secureTextEntry={true}/>
        </CardSection>
        <View style={{borderBottomWidth: 1, borderColor: 'black', opacity: 0.12}} />
        <Button>SIGN ME IN</Button>
      </Card>
    );
  }
}

export default LoginForm;
