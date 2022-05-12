const Helper = require('@codeceptjs/helper');

class CustomRestHelper extends Helper {

    definePayload(endPoint, body, headers) {
        global.endPoint = endPoint || {};
        global.body = body || {};
        global.headers = headers || {};
    }
}

module.exports = CustomRestHelper;
