import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default class TreeList extends Component {
  static navigationOptions = {
    title: 'Your Trees',
  };

  constructor() {
    super()
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount() {
    return fetch('https://data.cityofnewyork.us/resource/nwxe-4ae8.json')
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          isLoading: false,
          dataSource: resJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let trees = this.state.dataSource
      
      return (
        <ScrollView style={styles.container}>
          <FlatList data={trees} renderItem={({item}) =>
              <Text style={styles.item}>{item.spc_common}</Text>}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
