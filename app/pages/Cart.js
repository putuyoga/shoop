import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Button,
  Screen,
  Icon,
  Text,
  TextInput,
  Card,
  View,
  Caption,
  Row,
  Divider,
  DropDownMenu
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { navigatePush } from '../navigation/actions';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.simplifyPrice = this.simplifyPrice.bind(this);
    this.generateQtyArray = this.generateQtyArray.bind(this);
  }

  getProducts() {
    return require('../assets/data/products.json');
  }

  simplifyPrice(price) {
    var price = parseFloat(price);
    price /= 1000;
    return 'Rp. ' + price + 'rb';
  }

  generateQtyArray() {
    var data = [];
    for(var i = 1; i < 11; i++) {
      data.push({id: i, name: i + 'x'});
    }
    return data;
  }

  renderRow(item) {
    let salePrice = null;
    let regPrice = null;

    // check for price first
      if(item.sale_price.length > 0) {
        salePrice = <Caption styleName="md-gutter-right line-through" style={{backgroundColor: '#ecf0f1', color: '#999', padding: 5}}>{this.simplifyPrice(item.regular_price)}</Caption>;
        regPrice = <Caption styleName="md-gutter-right" style={{backgroundColor: '#c0392b', color: '#fff', padding: 5}}>{this.simplifyPrice(item.sale_price)}</Caption>;
      }
      else {
        regPrice = <Caption styleName="md-gutter-right" style={{backgroundColor: '#ecf0f1', color: '#000', padding: 5}}>{this.simplifyPrice(item.price)}</Caption>;
      }

    return (
      <Row>
        <Image
          styleName="small rounded-corners"
          source={{ uri: item.images[0].src }}
        />
        <View styleName="vertical stretch space-between">
          <Subtitle>{item.name}</Subtitle>
          <View styleName="horizontal">
            {regPrice}
            {salePrice}
          </View>
        </View>
        <DropDownMenu
          options={this.generateQtyArray()}
          titleProperty={"name"}
          valueProperty={"id"}
        />

        <Divider styleName="line" />
      </Row>
    );
  }

  render() {
    return (    
      <Screen style={{ marginTop: 70}}>
        <ScrollView>
          <ListView
            data={this.getProducts()}
            renderRow={cartItems => this.renderRow(cartItems)}
          />
        </ScrollView>      
        <View styleName="horizontal" style={{padding: 10}}>
          <Button styleName="full-width dark">
            <Icon name="right-arrow" />
            <Text>CHECKOUT</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}
