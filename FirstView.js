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

  static navigationOptions = ({
    navigation
  }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    });
  }

  _increaseCount = () => {
    console.log('点击了');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={ ()=> {
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