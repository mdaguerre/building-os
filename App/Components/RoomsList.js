import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  Switch,
  ListView,
  StyleSheet,
  TouchableHighlight
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

var DevicesList = require('./DevicesList')

class RoomsList extends Component {

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
    var rooms = [
      {
        id : 1,
        name : 'Living',
      },
      {
        id : 2,
        name : 'Kitchen',
      },
      {
        id : 3,
        name : 'Dorm',
      },
      {
        id : 4,
        name : 'Bathroom',
      }
    ]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rooms),
      loaded: true,
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Rooms...
        </Text>
      </View>
    );
  }

  navigate(event) {
    console.log(arguments)
    this.props.navigator.push({
      title : 'Devices',
      component : DevicesList
    })
  }

  renderRow(row) {
    return (
      <TouchableHighlight
        onPress={this.navigate.bind(this)}
        underlayColor = "grey" >
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.deviceTitle}>{row.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _handleBackButtonPress() {
    this.props.navigator.pop();
}
  _handleNextButtonPress() {
    this.props.navigator.push(nextRoute);
  }
}

module.exports = RoomsList;
