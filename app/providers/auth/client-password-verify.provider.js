"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPasswordVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const auth_clients_model_1 = require("../../models/auth-clients.model");
const repositories_1 = require("../../repositories");
let ClientPasswordVerifyProvider = class ClientPasswordVerifyProvider {
    constructor(authClientRepository) {
        this.authClientRepository = authClientRepository;
    }
    value() {
        console.log("VERIFY CLIENT PAAWORD");
        return async (clientId, clientSecret, req) => {
            console.log(clientId, clientSecret);
            var d = new auth_clients_model_1.AuthClient();
            return d;
        };
    }
};
ClientPasswordVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AuthClientRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AuthClientRepository])
], ClientPasswordVerifyProvider);
exports.ClientPasswordVerifyProvider = ClientPasswordVerifyProvider;
//# sourceMappingURL=client-password-verify.provider.js.map