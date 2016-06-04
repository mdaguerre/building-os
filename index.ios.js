import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Switch,
  NavigatorIOS
} from 'react-native';

var RoomsList = require('./App/Components/RoomsList');

class BuildingOs extends Component {
  render() {
  return (
    <NavigatorIOS
      style={styles.simpleContainer}
      initialRoute={{
        component: RoomsList,
        title: 'Rooms'
      }}
    />
  );
}
}

var styles = StyleSheet.create({
  simpleContainer : {
    flex: 1,
  },
});

AppRegistry.registerComponent('BuildingOs', () => BuildingOs);
