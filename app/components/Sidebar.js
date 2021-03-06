import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  NavigationBar,
  Title,
  Button,
  Icon,
  ScrollView,
  TouchableOpacity,
  Screen,
  Text,
  Row,
  Divider,
  Caption
} from '@shoutem/ui';

export default class Sidebar extends Component {
  render() {
    const { 
      onMembershipButtonPress,
      onRecentOrderButtonPress,
      onAboutButtonPress
    } = this.props;
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => onMembershipButtonPress()}>
        <Row styleName="small">
            <Icon name="friends" />
            <Text>Membership</Text>
            <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        </TouchableOpacity>
        <Row styleName="small">
          <Icon name="cart" />
          <Text>Recent Orders</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Row styleName="small">
          <Icon name="web" />
          <Text>About</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="section-header">
          <Caption>CATEGORIES</Caption>
        </Divider>

      </ScrollView>   
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  }
});
