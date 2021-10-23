var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.tcscubo.com/ai_computer_vision/orbo/portrait_segmentaion/v1/photos/portraitsegmtation/upload',
  qs: {
    access_token: 'cUh1U5V5AJAfAKDrmqFEbyeYNRYLI9f4gFEu7TzVrdvvQXyhIuD0qsWkktNfBLr0'
  },
  headers: {
    accept: 'multipart/form-data',
    'content-type': 'application/json',
    'ocp-apim-subscription-key': proces.env.ACCESTOKENFACEMATCHING
  }
};




const Segmentation = (image) => {
    options.body = {image: image};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return body;
    }
    );
}

export default Segmentation;