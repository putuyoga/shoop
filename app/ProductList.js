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
  Card,
  View,
  Caption,
  GridRow
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { navigatePush } from './navigation/actions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getProducts() {
    return require('../assets/data/products.json');
  }

  renderRow(data) {
    const { onButtonPress } = this.props;
    // data contains grouped data for one row, 
    // so we need to remap it into cells and pass to GridRow
    const cellViews = data.map((item) => {
      return (
        <TouchableOpacity key={item.id} onPress={() => onButtonPress(item)}>
          <Card  styleName="space-between">
            <Image
              styleName="medium-wide"
              source={{uri: item.images[0].src}}
            />
            <View styleName="content">
              <Subtitle>{item.name}</Subtitle>
              <View styleName="horizontal v-center space-between">
                <View styleName="horizontal">
                  <Subtitle styleName="md-gutter-right">{item.price}</Subtitle>
                  <Caption styleName="line-through">{item.sale_price}</Caption>
                </View>
                <Button styleName="tight clear"><Icon name="cart" /></Button>
              </View>
            </View>
          </Card>
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
        <ScrollView>
        <Screen style={{ marginTop: 70 }}>
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
