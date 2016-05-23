import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  Switch,
  ListView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding : 10
  },
  rightContainer: {
    flex: 1
  },
  leftContainer: {
    flex: 3
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  deviceTitle : {
    fontSize: 20
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 64,
    backgroundColor: '#F5FCFF',
  },
  switchView: {
    flex: 1
  }
});

var DeviceSwitch = require('./DeviceSwitch');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


class DevicesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {

        responseData.devices = [
          {
            id : 1,
            name : 'Light',
            device : {
              id : "440027000547353138383138",
              function : 'light'
            }
          }
        ]
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.devices),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Devices...
        </Text>
      </View>
    );
  }

  renderRow(row) {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.deviceTitle}>{row.name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <DeviceSwitch device={row.device}/>
        </View>
      </View>
    );
  }

  _handleBackButtonPress() {
  this.props.navigator.pop();
}
  _handleNextButtonPress() {
    this.props.navigator.push(nextRoute);
  }
}

module.exports = DevicesList;
