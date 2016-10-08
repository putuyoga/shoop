import React, { Component } from 'react';
import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
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
              <Title>{product.name}</Title>
              <Subtitle>{product.price}</Subtitle>
            </Tile>
          </Image>

          <Screen styleName="paper">
            <Text styleName="md-gutter">{product.description}</Text>

            <Divider styleName="line" />

            <Row>
              <Icon name="laptop" />
              <View styleName="vertical">
                <Subtitle>Visit webpage</Subtitle>
                <Text>{product.url}</Text>
              </View>
              <Icon name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="pin" />
              <View styleName="vertical">
                <Subtitle>Address</Subtitle>
                <Text>{product.address}</Text>
              </View>
              <Icon name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="email" />
              <View styleName="vertical">
                <Subtitle>Email</Subtitle>
                <Text>{product.mail}</Text>
              </View>
            </Row>

            <Divider styleName="line" />
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}

ProductDetails.propTypes = {
  product: React.PropTypes.object,
};