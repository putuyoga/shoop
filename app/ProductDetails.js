import React, { Component } from 'react';
import HtmlView from 'react-native-htmlview';
import {
  Overlay,
  ScrollView,
  Icon,
  Row,
  Heading,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Button,
  Tile,
  Screen,
  RichMedia,
  Caption
} from '@shoutem/ui';

export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;
    let salePrice = null;
    let regPrice = null;
    if(product.sale_price.length > 0) {
      salePrice = <Caption styleName="line-through">Rp. {product.regular_price}</Caption>;
      regPrice = <Heading styleName="md-gutter-center">Rp. {product.sale_price}</Heading>;
    }
    else {
      regPrice = <Title styleName="md-gutter-center">Rp. {product.price}</Title>;
    }
    return (
      <Screen styleName="paper" style={{ marginTop: 70 }}>
        <ScrollView>
          <Image
            styleName="large-wide"
            source={{ uri: product.images[0].src }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">{product.name}</Title>
              {salePrice}
              {regPrice}
            </Tile>
          </Image>
          <Screen styleName="paper" style={{padding: 20, paddingBottom: 0}} >
            <Subtitle>DESCRIPTION</Subtitle>
            <HtmlView value={product.description} />

          </Screen>
        </ScrollView>
        <View styleName="horizontal" style={{padding: 10}}>
          <Button styleName="full-width dark">
            <Icon name="add-to-cart" />
            <Text>ADD TO CART</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}

ProductDetails.propTypes = {
  product: React.PropTypes.object,
};