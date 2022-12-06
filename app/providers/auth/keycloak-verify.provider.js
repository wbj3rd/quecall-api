"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const authUser_model_1 = require("../../models/authUser.model");
const repositories_1 = require("../../repositories");
let KeycloakVerifyProvider = class KeycloakVerifyProvider {
    constructor(userRepository, userCredsRepository) {
        this.userRepository = userRepository;
        this.userCredsRepository = userCredsRepository;
    }
    value() {
        console.log("VERIFY");
        return async (accessToken, refreshToken, profile) => {
            var user = {
                username: 'Walter'
            };
            const authUser = new authUser_model_1.AuthUser({
                ...user,
                id: user.id,
            });
            authUser.permissions = [];
            authUser.externalAuthToken = accessToken;
            authUser.externalRefreshToken = refreshToken;
            return authUser;
        };
    }
};
KeycloakVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UserCredentialsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.UserCredentialsRepository])
], KeycloakVerifyProvider);
exports.KeycloakVerifyProvider = KeycloakVerifyProvider;
//# sourceMappingURL=keycloak-verify.provider.js.map