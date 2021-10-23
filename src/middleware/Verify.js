var optionsRequestVerification = {
    method: 'POST',
    url: 'https://api.tcscubo.com/banking/vonage/verify/v1/%7Bformat%7D',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'ocp-apim-subscription-key': process.env.APISECRETVERIFY
    }
};

var optionsVerifyCheck = {
    method: 'POST',
    url: 'https://api.tcscubo.com/banking/vonage/verify/v1/check/%7Bformat%7D',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'ocp-apim-subscription-key': process.env.APISECRETVERIFY
    }
};


const requestVerification = (phoneNumber, format) => {

    request(optionsRequestVerification, function (error, response, body) {
        if (error) throw new Error(error);

        return body;
      }
    );

}




const verifyCheck = (phoneNumber, format) => {

    request(optionsVerifyCheck, function (error, response, body) {
        if (error) throw new Error(error);

        return body;
    }
    );
}


module.exports = {
    requestVerification,
    verifyCheck
}


