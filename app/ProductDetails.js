import React, { Component } from 'react';
import {
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
} from '@shoutem/ui';

export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;

    return (
      <Screen styleName="paper">
        <ScrollView>
          <Image
            animationName="hero"
            styleName="large-portrait hero"
            source={{ uri: product.images[0].src }}
            key={product.name}
          >
            <Tile animationName="hero">
              <Heading>{product.name}</Heading>
              <Title>Rp. {product.price}</Title>
            </Tile>
          </Image>

          <Screen styleName="paper">
            <Text styleName="md-gutter">{product.description}</Text>

            <Divider styleName="line" />
            <View styleName="horizontal flexible">
              <Button styleName="full-width dark">
                <Icon name="add-to-favorites-full" />
                <Text>Reviews</Text>
              </Button>
              <Button styleName="full-width dark">
                <Icon name="add-to-cart" />
                <Text>Buy Product</Text>
              </Button>
            </View>
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}

ProductDetails.propTypes = {
  product: React.PropTypes.object,
};