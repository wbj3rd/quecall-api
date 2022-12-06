"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceOwnerVerifyProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
//import * as keycloak from "keycloak-backend";
const auth_clients_model_1 = require("../../models/auth-clients.model");
const auth_user_model_1 = require("../../models/auth-user.model");
const repositories_1 = require("../../repositories");
let ResourceOwnerVerifyProvider = class ResourceOwnerVerifyProvider {
    constructor(request, userRepository, authClientRepository) {
        this.request = request;
        this.userRepository = userRepository;
        this.authClientRepository = authClientRepository;
    }
    value() {
        console.log(this.request);
        return async (clientId, clientSecret, username, password) => {
            console.log("ASYNC");
            console.log(clientId);
            console.log(clientSecret);
            const user = new auth_user_model_1.AuthUser({});
            const client = new auth_clients_model_1.AuthClient();
            const keycloak = require("keycloak-backend")({
                "realm": "Call Center",
                "auth-server-url": "http://localhost:8081",
                "client_id": "Test Server",
                "client_secret": "o5kTjP8J2AeHZvMwEOJj3S9gzro7Eopi",
                "username": "Test",
                "password": "password",
                "grant_type": "password"
            });
            console.log("KEYCLOACKSs");
            //console.log(keycloak)
            //const someAccessToken = await keycloak.accessToken.get()
            // how to get openid info from access token...
            console.log("SOME TOKEN");
            //keycloak.config
            const someAccessToken = await keycloak.accessToken.get();
            //console.log(someAccessToken)
            // info.sub contains the user id
            let token = await keycloak.jwt.verify(someAccessToken);
            //onsole.log(token.content)
            const json = (0, jsonwebtoken_1.decode)(token, { json: true });
            //console.log(json)
            const info = await keycloak.accessToken.info(someAccessToken);
            //console.log(info)
            user.id = info.sub;
            user.username = info.preferred_username;
            user.roles = token.content.realm_access.roles;
            client.clientId = clientId;
            client.clientSecret = clientSecret;
            // const user = await this.userRepository.verifyPassword(username, password);
            // console.log(user)
            // if (!user) {
            //   throw new HttpErrors.Unauthorized(AuthErrorKeys.InvalidCredentials);
            // }
            // console.log("THERE")
            // const client = await this.authClientRepository.findOne({
            //   where: {
            //     clientId,
            //   },
            // });
            // if (!client || client.userIds.indexOf(user.id || 0) < 0) {
            //   throw new HttpErrors.Unauthorized(AuthErrorKeys.ClientInvalid);
            // } else if (!client.clientSecret || client.clientSecret !== clientSecret) {
            //   throw new HttpErrors.Unauthorized(
            //     AuthErrorKeys.ClientVerificationFailed,
            //   );
            // }
            if (!user) {
                throw new rest_1.HttpErrors.Unauthorized("Invalid Credentials" /* AuthErrorKeys.InvalidCredentials */);
            }
            return {
                client,
                user,
            };
        };
    }
};
ResourceOwnerVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.AuthClientRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, repositories_1.UserRepository,
        repositories_1.AuthClientRepository])
], ResourceOwnerVerifyProvider);
exports.ResourceOwnerVerifyProvider = ResourceOwnerVerifyProvider;
//# sourceMappingURL=resource-owner-verify.provider.js.map