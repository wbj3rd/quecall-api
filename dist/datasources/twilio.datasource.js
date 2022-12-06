"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'twilio',
    connector: 'twilio',
    accountSid: 'AC59d932bc85de0cc648f471d3b88cd126',
    authToken: '4e50ca9b9948e480865c855859e3a480'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let TwilioDataSource = class TwilioDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
    async availableNumbers() {
        const client = require('twilio')(config.accountSid, config.authToken);
        return await client.availablePhoneNumbers('US')
            .local
            .list({ areaCode: 510, limit: 20 });
    }
    purchaseNumber(number) {
        const client = require('twilio')(config.accountSid, config.authToken);
        return client.incomingPhoneNumbers
            .create({ phoneNumber: number })
            .then((incoming_phone_number) => console.log(incoming_phone_number.sid));
    }
    sendText(from, to, body) {
        const client = require('twilio')(config.accountSid, config.authToken);
        return client.messages.create({
            from: from,
            to: to,
            body: body
        });
    }
};
TwilioDataSource.dataSourceName = 'twilio';
TwilioDataSource.defaultConfig = config;
TwilioDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.twilio', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], TwilioDataSource);
exports.TwilioDataSource = TwilioDataSource;
//# sourceMappingURL=twilio.datasource.js.map