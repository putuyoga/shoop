import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  Screen,
  Caption
} from '@shoutem/ui';

class Register extends Component {
  render() {
    console.log('i got called');
    return (
      <Screen styleName="paper" style={{ marginTop: 70, alignItems:'center'}}>
        <View style={{ minWidth: 320  }}>
          <TextInput 
            placeholder={'Username'}
          />
          <TextInput 
            placeholder={'Full Name'}
          />
          <TextInput 
            placeholder={'Email'}
          />
          <TextInput 
            placeholder={'Password'}
            secureTextEntry
          />
          <TextInput 
            placeholder={'Retype Password'}
            secureTextEntry
          />
          <Button styleName="dark" style={{ marginTop: 24 }}>
            <Text>CREATE ACCOUNT</Text>
          </Button>
          <View styleName="horizontal" style={{
            marginTop: 24,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Caption>by create account, you agree with our terms and condition</Caption>
          </View>

        </View>
      </Screen>
    );
  }
}

export default Register;