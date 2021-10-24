const request = require('request');


var optionsVerifyCheck = {
    method: 'POST',
    url: 'https://api.tcscubo.com/banking/vonage/verify/v1/check/%7Bformat%7D',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'ocp-apim-subscription-key': process.env.APISECRETVERIFY
    }
};


const requestVerification = (phoneNumber) => {
    var optionsRequestVerification = {
        method: 'POST',
        url: 'https://api.tcscubo.com/banking/vonage/verify/v1/%7Bformat%7D',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'ocp-apim-subscription-key': process.env.APISECRETVERIFY,
        }
    };
    console.log(process.env.APISECRETVERIFY);
    optionsVerifyCheck.body = {api_key: process.env.APIKEYVERIFY, number: phoneNumber, country: 'MX', brand: 'PYMEET', }
    request(optionsRequestVerification, function (error, response, body) {
        console.log(body);
        if (error) throw new Error(error);
        return response;
      }
    );
}


const verifyCheck = (phoneNumber) => {
    optionsVerifyCheck.body = {number: phoneNumber, country: 'MX', brand: 'PYMEET', };

    request(optionsVerifyCheck, function (error, response, body) {
        if (error) throw new Error(error);

        return response;
    }
    );
}


module.exports = {
    requestVerification,
    verifyCheck
}


