
var api = {

  modifyBinaryDevice(deviceId, functionName, action){
    fetch('https://api.particle.io/v1/devices/'+deviceId+'/'+functionName, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer 3f39e8960ec7d42bdfa23df2102e9ea2bc53fc10 RESET TOKEN'
      },
      body: JSON.stringify({
        args: action
      })
    });
  }

}

module.exports = api;
