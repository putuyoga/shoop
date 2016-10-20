import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import {
  NavigationBar,
  Title,
  Button,
  Icon,
  View,
  Screen,
  Text
} from '@shoutem/ui';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { navigatePop, navigatePush } from './navigation/actions';

// Import page
import {
  ProductList,
  ProductDetails,
  Cart,
  Login,
  Register,
  ForgotPassword
} from './pages';

// import components
import {
  Sidebar
} from './components';

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
      case 'Login':
        styles.navigationBar = 'container';
        return <Login />;
      case 'Register':
        styles.navigationBar = 'container';
        return <Register />;
      case 'ForgotPassword':
        styles.navigationBar = 'container';
        return <ForgotPassword />;
      case 'Cart':
        styles.navigationBar = 'container';
        return <Cart />;
      default:
        return <ProductList />;
    }
  }

  closeControlPanel() {
    this._drawer.close();
  }

  openControlPanel() {
    this._drawer.open();
  };

  render() {
    const { onCartButtonPress, sidebarMenu, navigationState, backAction } = this.props;
    return (
      <NavigationTransitioner
        navigationState={navigationState}
        render={props => {
          const title = <Title numberOfLines={1}>{props.scene.route.title}</Title>;

          return (
            <Drawer
              type="overlay"
              ref={(ref) => this._drawer = ref}
              content={<Sidebar {...sidebarMenu} />}
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              openDrawerOffset={0.2}
              styles={{main: {shadowColor: '#fbfcfc', shadowOpacity: 0.3, shadowRadius: 15}}}
              >
              <View styleName="flexible">
                <NavigationCard
                  {...props}
                  renderScene={this.renderScene}
                  key={props.scene.route.key}
                />
                <NavBarStageContainer style={{backgroundColor: '#000000'}}>
                  <NavigationBar
                    styleName="clear"
                    centerComponent={title}
                    leftComponent={
                      props.scene.index === 0 ?
                        <Button onPress={() => this.openControlPanel()}>
                          <Icon name="sidebar" />
                        </Button> :
                        <Button onPress={backAction}>
                          <Icon name="back" />
                        </Button>
                    } 
                    rightComponent={(
                      props.scene.route.key === 'Cart' ? null :
                      <Button onPress={() => onCartButtonPress()}>
                        <Icon name="cart" />
                      </Button>
                    )}
                  />
                </NavBarStageContainer>
              </View>
            </Drawer>
          );
        }}
      />
    );
  }
}

App.propTypes = {
  onCartButtonPress: React.PropTypes.func.isRequired,
  sidebarMenu: React.PropTypes.object.isRequired,
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
    },
    onCartButtonPress: () => {
      dispatch(navigatePush({ key: 'Cart', title: 'Cart' }))
    },
    sidebarMenu: {
      onMembershipButtonPress: () => {
        dispatch(navigatePush({ key: 'Login', title: 'Login' }))
      },
      onRecentOrderButtonPress: () => {
        dispatch(navigatePush({ key: 'RecentOrders', title: 'Recent Orders'}))
      },
      onAboutButtonPress: () => {
        dispatch(navigatePush({ key: 'About', title: 'About'}))
      }
    }
  })
)(App);