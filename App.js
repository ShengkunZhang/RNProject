/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*
 * 简单的导航
 */
import React, {
  Component
} from 'react';

import SplashScreen from 'react-native-splash-screen'

import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import FlatListView from './FlatListView'
import FirstView from './FirstView'

const AppNavigator = createStackNavigator({
  FirstS: {
    screen: FirstView
  },
  FlatListS: {
    screen: FlatListView
  },
}, {
  initialRouteName: "FirstS",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  componentDidMount() {
    if (__DEV__) {
      console.log('debug模式下，不消除白屏问题');
    } else {
      // js资源加载完之后 关闭启动屏幕等待
      SplashScreen.hide();
    }
  }

  render() {
    return (
      <AppContainer />
    )
  }
}


/*
 * tabBar样式的导航
 */
// import React, {
//   Component
// } from 'react';

// import SplashScreen from 'react-native-splash-screen'

// import {
//   createStackNavigator,
//   createBottomTabNavigator,
//   createAppContainer
// } from "react-navigation";

// import FlatListView from './FlatListView'
// import FirstView from './FirstView'

// const AppNavigator1 = createStackNavigator({
//   FirstS: {
//     screen: FirstView
//   },
//   FlatListS: {
//     screen: FlatListView
//   },
// }, {
//   initialRouteName: "FirstS"
// });

// const AppNavigator2 = createStackNavigator({
//   FlatListS: {
//     screen: FlatListView
//   },
//   FirstS: {
//     screen: FirstView
//   },
// }, {
//   initialRouteName: "FlatListS"
// });

// const TabNavigator = createBottomTabNavigator({
//   '主页': AppNavigator1,
//   '副页': AppNavigator2,
// });

// const AppContainer = createAppContainer(TabNavigator);

// export default class App extends Component {

//   componentDidMount() {
//     if (__DEV__) {
//       console.log('debug模式下，不消除白屏问题');
//     } else {
//       // js资源加载完之后 关闭启动屏幕等待
//       SplashScreen.hide();
//     }
//   }

//   render() {
//     return (
//       <AppContainer />
//     )
//   }
// }