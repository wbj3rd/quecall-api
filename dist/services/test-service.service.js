"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestServiceProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const service_proxy_1 = require("@loopback/service-proxy");
const datasources_1 = require("../datasources");
let TestServiceProvider = class TestServiceProvider {
    constructor(
    // testRemote must match the name property in the datasource json file
    dataSource = new datasources_1.TestRemoteDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
};
TestServiceProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.testRemote')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.TestRemoteDataSource])
], TestServiceProvider);
exports.TestServiceProvider = TestServiceProvider;
//# sourceMappingURL=test-service.service.js.map