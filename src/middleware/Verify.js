const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: "3c83746d",
  apiSecret: "WXt2Od7YB7zau38q"
});

const verificationRequest = (number) => {
    
    vonage.verify.request({
        brand: 'PYMEET',
        to: number,
    }), (err, data) => {
        if (err) {
            return err;
        } else {
            const verifyRequestId = data.request_id;
            return verifyRequestId;
        }
    }

};

const verify = (request_id, code) => {

    vonage.verify.check({
        request_id: request_id,
        code: code
    }, (err, data) => {
        if (err) {
            return err;
        } else {
            const verified = data.status;
            return verified;
        }
    }

    );
};
