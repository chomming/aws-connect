const AWS = require('aws-sdk');
var connect = new AWS.Connect();

exports.handler = (event, context, callback) => {
  var params = {
    ContactFlowId: "본인의 ContactFlowId",
    DestinationPhoneNumber: "수신받을 전화번호",
    InstanceId: "본인의 InstanceId",
    SourcePhoneNumber: "Connect에서 받은 전화번호"
  };

  connect.startOutboundVoiceContact(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

  callback(null, event);
}
