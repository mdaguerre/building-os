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

var DevicesList = require('./App/Components/DevicesList');

class BuildingOs extends Component {
  render() {
  return (
    <NavigatorIOS
      style={styles.simpleContainer}
      initialRoute={{
        component: DevicesList,
        title: 'Devices'
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
