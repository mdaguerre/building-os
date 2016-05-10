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
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


var DeviceSwitch = React.createClass({
  getInitialState() {
    return {
      isOn: true,
    };
  },
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange= {(value) => this.handleChange(value)}
            style={{marginBottom: 10}}
            value={this.state.isOn} />
        </View>
    </View>
    );
  },
  handleChange(value) {
    this.setState({isOn: value})

    let action = value ? 'on' : 'off';
    fetch('https://api.particle.io/v1/devices/'+this.props.device.id+'/'+this.props.device.function, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer 3f39e8960ec7d42bdfa23df2102e9ea2bc53fc10 RESET TOKEN'
      },
      body: JSON.stringify({
        args: action
      })
    })
  }
});

class BuildingOs extends Component {
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
            name : 'Enchufe #1',
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
}


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
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  switchView: {
    flex: 1
  }
});

AppRegistry.registerComponent('BuildingOs', () => BuildingOs);
