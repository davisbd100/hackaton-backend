var request = require("request");
// CLIENTKEYFACEMATCHING
// ACCESTOKENFACEMATCHING
var options = {
  method: 'POST',
  url: 'https://api.tcscubo.com/ai_computer_vision/orbo/face_matching/v1/pictures/facematch/upload',
  qs: {
    access_token: proces.env.ACCESTOKENFACEMATCHING
  },
  headers: {
    accept: 'multipart/form-data',
    'content-type': 'application/json',
    'ocp-apim-subscription-key': 'REPLACE_KEY_VALUE'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
