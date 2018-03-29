import React, { Component } from 'react';

import { Card, CardSection, Button, Input } from './common';

export default class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder={'Email'} />
        </CardSection>
        <CardSection>
          <Input
            placeholder={'Password'}
            secureTextEntry={true}/>
        </CardSection>
        <Button>SIGN ME IN</Button>
      </Card>
    );
  }
}
