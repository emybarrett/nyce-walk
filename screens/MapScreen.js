import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {MapView} from 'expo'

export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <MapView style={styles.map}
          region={{
            latitude: 40.705076,
            longitude: -74.009160,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          >

          <MapView.Marker
              coordinate={{
                latitude: 40.705076,
                longitude: -74.009160,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
              title={'Fullstack'}
              decscription={'Starting Point'}
          />

        </MapView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})