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
  GridRow
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { navigatePush } from '../navigation/actions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.simplifyPrice = this.simplifyPrice.bind(this);
  }

  getProducts() {
    return require('../../assets/data/products.json');
  }

  simplifyPrice(price) {
    var price = parseFloat(price);
    price /= 1000;
    return 'Rp. ' + price + 'rb';
  }

  renderRow(data) {
    const { onButtonPress } = this.props;
    // data contains grouped data for one row, 
    // so we need to remap it into cells and pass to GridRow
    const cellViews = data.map((item) => {
      let salePrice = null;
      let regPrice = null;
      if(item.sale_price.length > 0) {
        salePrice = <Caption styleName="md-gutter-right line-through" style={{backgroundColor: '#ecf0f1', color: '#999', padding: 5}}>{this.simplifyPrice(item.regular_price)}</Caption>;
        regPrice = <Caption styleName="md-gutter-right" style={{backgroundColor: '#e74c3c', color: '#fff', padding: 5}}>{this.simplifyPrice(item.sale_price)}</Caption>;
      }
      else {
        regPrice = <Caption styleName="md-gutter-right" style={{backgroundColor: '#ecf0f1', color: '#000', padding: 5}}>{this.simplifyPrice(item.price)}</Caption>;
      }
      return (
        <TouchableOpacity key={item.id} onPress={() => onButtonPress(item)}>
          <Tile styleName="clear space-between" style={{justifyContent: 'center',
    alignItems: 'center'}}>
            <Image
              styleName="medium-square"
              source={{ uri: item.images[0].src }}
            />
            <View styleName="content ">
              <Subtitle numberOfLines={1}>{item.name}</Subtitle>
              <View styleName="horizontal">
                {regPrice}
                {salePrice} 
              </View>
            </View>
          </Tile>
        </TouchableOpacity>
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );   
  }

  render() {
    var data = this.getProducts();
    const groupedData = GridRow.groupByRows(data, 2)

      return (
        
        <ScrollView style={{backgroundColor: '#fff'}}>
        <Screen style={{ marginTop: 70}}>
        <TextInput 
            placeholder={'Search product'}
          />
          <ListView
            data={groupedData}
            renderRow={this.renderRow}
          />
        </Screen>
      </ScrollView>
      );
  }
}

ProductList.propTypes = {
  onButtonPress: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (product) => {
    dispatch(navigatePush({ key: 'ProductDetails', title: 'Details' }, { product }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(ProductList);
