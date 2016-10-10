import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import {
  NavigationBar,
  Title,
  Button,
  Icon,
  View,
  Screen
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { navigatePop } from './navigation/actions';

// Import page
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const {
	Transitioner: NavigationTransitioner,
	Card: NavigationCard,
} = NavigationExperimental;

// Stylenames for navigation bar depend on which scene is rendered
const styles = {
  navigationBar: 'container',
};

function NavBarStageContainer(props) {
  return (
    <View
      {...props}
      style={{
        width: window.width,
        height: 70,
        ...props.style,
      }}
    />
  );
}

class App extends Component {
  renderScene(props) {
    const { route } = props.scene;

    switch(route.key) {
      case 'ProductList':
        styles.navigationBar = 'container';
        return <ProductList />;
      case 'ProductDetails':
        styles.navigationBar = 'container';
        return <ProductDetails {...route.props} />;
      default:
        return <ProductList />;
    }
  }

  render() {
    const { navigationState, backAction } = this.props;

    return (
      <NavigationTransitioner
        navigationState={navigationState}
        render={props => {
          const title = <Title numberOfLines={1}>{props.scene.route.title}</Title>;

          return (
            <View styleName="flexible">
              <NavigationCard
                {...props}
                renderScene={this.renderScene}
                key={props.scene.route.key}
              />
              <NavBarStageContainer style={{backgroundColor: '#2c3e50'}}>
                <NavigationBar
                  styleName="clear"
                  centerComponent={title}
                  leftComponent={
                    props.scene.index === 0 ?
                      <Button>
                        <Icon name="sidebar" />
                      </Button> :
                      <Button onPress={backAction}>
                        <Icon name="back" />
                      </Button>
                  } 
                  rightComponent={(
                    <Button>
                      <Icon name="cart" />
                    </Button>
                  )}
                />
              </NavBarStageContainer>
            </View>
          );
        }}
      />
    );
  }
}

App.propTypes = {
  backAction: React.PropTypes.func.isRequired,
  navigationState: React.PropTypes.object,
  scene: React.PropTypes.object
}

export default connect(
  state => ({
    navigationState: state.navigationState
  }),
  dispatch => ({
    backAction: () => {
      dispatch(navigatePop());
    }
  })
)(App);