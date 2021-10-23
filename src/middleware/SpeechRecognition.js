var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.tcscubo.com/ai/gnani/automatic_speech_recognition/v1/upload',
  headers: {
    accept: 'multipart/form-data',
    'content-type': 'application/json',
    token: proces.env.SPEECH_TOKEN,
    accesskey: proces.env.SPEECH_ACCESSKEY,
    lang: process.env.SPEECH_LANG,
    encoding: 'hi-IN',
    audioformat: 'WAV',
    'ocp-apim-subscription-key': process.env.SPEECH_SUBSCRIPTION_KEY
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
