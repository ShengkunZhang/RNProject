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
  Platform,
  FlatList
} from "react-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var MOCKED_MOVIES_DATA = [{
  title: "标题",
  year: "2015",
  posters: {
    thumbnail: "http://i.imgur.com/UePbdph.jpg"
  }
}];

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

type Props = {};

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./19.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class FlatListDemo extends Component < Props > {

  static navigationOptions = {
    title: 'FlatListDemo',
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: 'blue',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: <LogoTitle />,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movies: null,
      loading: false,
    }

    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          movies: responseData.movies,
          data: this.state.data.concat(responseData.movies),
          loading: true,
        });
      });
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.test)
    console.log(this.props.navigation.getParam('test2', 'default value'))
    this.fetchData()
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    // var movie = this.state.movies[0];
    // return this.renderMovie(movie);

    /*
    1. keyExtractor 此函数用于为给定的item生成一个不重复的key。
    2. Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。
    3. 若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标
    */
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie1}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

  renderMovie1({
    item
  }) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});