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
import { navigatePop, navigatePush } from '../navigation/actions';

class Login extends Component {
  render() {
    const { onRegisterButtonPress, onForgotButtonPress } = this.props;
    return (
      <Screen styleName="paper" style={{ marginTop: 70, alignItems:'center',
        justifyContent:'center' }}>
        <View style={{ minWidth: 320  }}>
          <TextInput 
            placeholder={'Email'}
          />
          <TextInput 
            placeholder={'Password'}
            secureTextEntry
          />
          <Button styleName="dark" style={{ marginTop: 24 }}>
            <Text>LOGIN</Text>
          </Button>
          <View styleName="horizontal" style={{
            marginTop: 24,
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Button styleName="full-width" onPress={() => onForgotButtonPress()}>
            <Text>FORGOT PASSWORD</Text>
          </Button>
          <Button styleName="full-width" onPress={() => onRegisterButtonPress()}>
            <Text>CREATE ACCOUNT</Text>
          </Button>
          </View>
        </View>
      </Screen>
    );
  }
}

Login.propTypes = {
  onRegisterButtonPress: React.PropTypes.func,
  onForgotButtonPress: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onRegisterButtonPress: (product) => {
    dispatch(navigatePush({ key: 'Register', title: 'Sign Up' }));
  },
  onForgotButtonPress: (product) => {
    dispatch(navigatePush({ key: 'ForgotPassword', title: 'Forgot Password' }));
  }
});


export default connect(
	undefined,
	mapDispatchToProps
)(Login);
