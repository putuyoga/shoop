import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  Screen,
  Caption
} from '@shoutem/ui';
import { connect } from 'react-redux';

export default class ForgotPassword extends Component {
  render() {
    const { onRegisterButtonPress, onForgotButtonPress } = this.props;
    return (
      <Screen styleName="paper" style={{ marginTop: 70, alignItems:'center',
        justifyContent:'center' }}>
        <View style={{ minWidth: 320  }}>
          <TextInput 
            placeholder={'Email'}
          />
          <Button styleName="dark" style={{ marginTop: 24 }}>
            <Text>RECOVER PASSWORD</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}