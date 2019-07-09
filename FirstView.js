/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class FirstView extends Component < Props > {

  // static navigationOptions = {
  //   title: 'FirstView',
  // };

  // navigationOptions使用动态的值
  static navigationOptions = ({
    navigation
  }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="右侧按钮"
          color="#fff"
        />
      ),
    };
  };

  componentDidMount() {
    /*
     * 改变动态值，以此达到修改navigation的目的
     * 但是这里是将increaseCount与_increaseCount这个函数绑定了
     * 最后的效果是点击右侧按钮这个函数响应。
     * 之所有这么做是因为 headerRight 这个对应的里面不可以用this，不能直接 onPress={this._increaseCount()}
     * 所以才如此间接处理
     */
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    });
  }

  // 对应的函数
  _increaseCount = () => {
    console.log('点击了');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={ ()=> {
            // 导航栏的跳转以及传参
            this.props.navigation.navigate('FlatListS', {test: 'my test', test2: 'my test2'})
        }}>
          <Text>FlatList例子</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});