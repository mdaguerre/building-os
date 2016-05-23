import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  Switch,
} from 'react-native';
var api = require('../Utils/api');

class DeviceSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }


  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Switch
            onValueChange= {(value) => this.handleChange(value)}
            style={{marginBottom: 10}}
            value={this.state.isOn} />
    </View>
    );
  }

  handleChange(value) {
    this.setState({isOn: value})
    let action = value ? 'on' : 'off';
    api.modifyBinaryDevice(this.props.device.id, this.props.device.function, action)
  }
};

module.exports = DeviceSwitch;
