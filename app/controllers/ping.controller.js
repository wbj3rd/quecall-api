"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const loopback4_authentication_1 = require("loopback4-authentication");
const auth_user_model_1 = require("../models/auth-user.model");
const repository_1 = require("@loopback/repository");
const crypto = tslib_1.__importStar(require("crypto"));
const token_response_dto_1 = require("../models/token-response.dto");
const repositories_1 = require("../repositories");
const datasources_1 = require("../datasources");
/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' },
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = class PingController {
    constructor(req, 
    //@inject('MY_USER_ID') public authorizedUserId: number,
    userRepo, authClientRepository, getCurrentUser, getCurrentClient, nodeService, twilioDataSource) {
        this.req = req;
        this.userRepo = userRepo;
        this.authClientRepository = authClientRepository;
        this.getCurrentUser = getCurrentUser;
        this.getCurrentClient = getCurrentClient;
        this.nodeService = nodeService;
        this.twilioDataSource = twilioDataSource;
    }
    // Map to `GET /ping`
    ping() {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
    async createSolution() {
        //add phone number to db and to asterisk
        //add queue to db and to asterisk
        //add hold music to asterisk and create recording in db
        //add agents to asterisk and add agents to solution in db
        //fwconsole reload
        //overall goal =>create solution in db store queue id, hold music, agents, phone number
        return this.nodeService.getGreeting();
    }
    async availableNumbers() {
        //call asterisk  and add agent to dynamic queue
        //add agent to solution
        //fwconsole reload
        console.log("Available Number");
        return await this.twilioDataSource.availableNumbers();
    }
    async purchaseNumber(phoneNumber) {
        //call asterisk  and add agent to dynamic queue
        //add agent to solution
        //fwconsole reload
        console.log("Purchase Number");
        return await this.twilioDataSource.purchaseNumber(phoneNumber);
    }
    async sendTwilioMessage(body) {
        //call asterisk  and add agent to dynamic queue
        //add agent to solution
        //fwconsole reload
        console.log("Add Agebt");
        return this.twilioDataSource.sendText(body.from, body.to, body.text);
    }
    async addAgent(body) {
        //call asterisk  and add agent to dynamic queue
        //add agent to solution
        //fwconsole reload
        console.log("Add Agebt");
        return this.nodeService.addAgentToQueue(body.user, body.queue);
    }
    async createHoldMusic(body) {
        //call asterisk server and upload music
        //add music to db
        //fwconsole reload
        console.log("Add Music");
        return this.nodeService.addMusic(body.music);
    }
    async createAgent(body) {
        //call asterisk sdd misc ext
        //OR
        //call asterisk and add extension and user to db => if they ar eusing a softphoe
        console.log("Add Agent");
        // console.log(this.req)
        return this.nodeService.addUser(body.user);
    }
    async createIncoming(body) {
        console.log("Create Incoming");
        //call twilio and create number
        //call asterisk and add number
        //add both to database phone number => phone number db
        // store asterisk incoming id with phone number
        //stroe twilio id with number
        console.log(body);
        return this.nodeService.addIncoming(body.phone_number);
    }
    async createQueue(body) {
        console.log("Create Incoming");
        //call twilio and create number
        //call asterisk and add number
        //add both to database phone number => phone number db
        // store asterisk incoming id with phone number
        //stroe twilio id with number
        return this.nodeService.addQueue(body.queue);
    }
    async agentChangeNumber(body) {
        console.log("Edit NUmber");
        //call twilio and create number
        //call asterisk and add number
        //add both to database phone number => phone number db
        // store asterisk incoming id with phone number
        //stroe twilio id with number
        return this.nodeService.agentChangeNumber(body.user);
    }
    async clientEditQueue(body) {
        console.log("Edit Queue");
        //call twilio and create number
        //call asterisk and add number
        //add both to database phone number => phone number db
        // store asterisk incoming id with phone number
        //stroe twilio id with number
        return this.nodeService.clientChangeQueue(body.queue);
    }
    async clientEditMusic(body) {
        console.log("Edit Music");
        //call twilio and create number
        //call asterisk and add number
        //add both to database phone number => phone number db
        // store asterisk incoming id with phone number
        //stroe twilio id with number
        return this.nodeService.clientChangeMusic(body.music, body.queue);
    }
    async buyNumber(req) {
        console.log(req);
        await this.loginWithClientUser(req);
        return "BUY NUMBER";
    }
    async loginWithClientUser(req) {
        console.log("LOGIN");
        //var u = this.getCurrentClient()
        //return this.authorizedUserId
        return this.getCurrentUser();
    }
    async createJWT(payload, authClient) {
        try {
            let user;
            if (payload.user) {
                user = payload.user;
            }
            else if (payload.userId) {
                user = await this.userRepo.findById(payload.userId);
            }
            if (!user) {
                throw new rest_1.HttpErrors.Unauthorized("UserDoesNotExist" /* AuthenticateErrorKeys.UserDoesNotExist */);
            }
            // const userTenant = await this.userTenantRepo.findOne({
            //   where: {
            //     userId: user.getId(),
            //     tenantId: user.defaultTenant,
            //   },
            // });
            // if (!userTenant) {
            //   throw new HttpErrors.Unauthorized(
            //     AuthenticateErrorKeys.UserDoesNotExist,
            //   );
            // } else if (userTenant.status !== 'active') {
            //   throw new HttpErrors.Unauthorized(AuthenticateErrorKeys.UserInactive);
            // }
            // Create user DTO for payload to JWT
            const authUser = new auth_user_model_1.AuthUser(user);
            // authUser.tenant = await this.userTenantRepo.tenant(userTenant.id);
            // const role = await this.userTenantRepo.role(userTenant.id);
            // const utPerms = await this.utPermsRepo.find({
            //   where: {
            //     userTenantId: userTenant.id,
            //   },
            //   fields: {
            //     permission: true,
            //     allowed: true,
            //   },
            // });
            // authUser.permissions = this.getUserPermissions(utPerms, role.permissions);
            // authUser.role = role.roleKey.toString();
            const accessToken = jsonwebtoken_1.default.sign(authUser.toJSON(), process.env.JWT_SECRET, {
                expiresIn: authClient.accessTokenExpiration,
                issuer: process.env.JWT_ISSUER,
            });
            const size = 32, ms = 1000;
            const refreshToken = crypto.randomBytes(size).toString('hex');
            // Set refresh token into redis for later verification
            // await this.refreshTokenRepo.set(
            //   refreshToken,
            //   {clientId: authClient.clientId, userId: user.id},
            //   {ttl: authClient.refreshTokenExpiration * ms},
            // );
            return new token_response_dto_1.TokenResponse({ accessToken, refreshToken });
        }
        catch (error) {
            // eslint-disable-next-line no-prototype-builtins
            if (rest_1.HttpErrors.HttpError.prototype.isPrototypeOf(error)) {
                throw error;
            }
            else {
                throw new rest_1.HttpErrors.Unauthorized("Invalid Credentials" /* AuthErrorKeys.InvalidCredentials */);
            }
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/ping'),
    (0, rest_1.response)(200, PING_RESPONSE),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], PingController.prototype, "ping", null);
tslib_1.__decorate([
    (0, rest_1.post)('/create/solution'),
    (0, rest_1.response)(200),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "createSolution", null);
tslib_1.__decorate([
    (0, rest_1.get)('/available/numbers'),
    (0, rest_1.response)(200),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "availableNumbers", null);
tslib_1.__decorate([
    (0, rest_1.post)('/purchase/number'),
    (0, rest_1.response)(200),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "purchaseNumber", null);
tslib_1.__decorate([
    (0, rest_1.post)('/send/text'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "sendTwilioMessage", null);
tslib_1.__decorate([
    (0, rest_1.post)('/queue/add/agent'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "addAgent", null);
tslib_1.__decorate([
    (0, rest_1.post)('/create/hold-music'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "createHoldMusic", null);
tslib_1.__decorate([
    (0, rest_1.post)('/create/agent'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "createAgent", null);
tslib_1.__decorate([
    (0, rest_1.post)('/create/incoming-route'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "createIncoming", null);
tslib_1.__decorate([
    (0, rest_1.post)('/create/queue'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "createQueue", null);
tslib_1.__decorate([
    (0, rest_1.post)('/agent/edit/number'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "agentChangeNumber", null);
tslib_1.__decorate([
    (0, rest_1.post)('/client/edit/queue'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "clientEditQueue", null);
tslib_1.__decorate([
    (0, rest_1.post)('/client/edit/music'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "clientEditMusic", null);
tslib_1.__decorate([
    (0, rest_1.post)("/buy-number"),
    (0, loopback4_authentication_1.authenticate)("OAuth2 resource owner grant" /* STRATEGY.OAUTH2_RESOURCE_OWNER_GRANT */),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "buyNumber", null);
tslib_1.__decorate([
    (0, rest_1.post)('/auth/login-token'),
    (0, rest_1.response)(200),
    (0, loopback4_authentication_1.authenticate)("OAuth2 resource owner grant" /* STRATEGY.OAUTH2_RESOURCE_OWNER_GRANT */, {
        //successReturnToOrRedirect: '/',
        //passReqToCallback: true,
        //failureRedirect: options.loginFailPage || '/login',
        failureFlash: true
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "loginWithClientUser", null);
PingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.AuthClientRepository)),
    tslib_1.__param(3, core_1.inject.getter(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER)),
    tslib_1.__param(4, core_1.inject.getter(loopback4_authentication_1.AuthenticationBindings.CURRENT_CLIENT)),
    tslib_1.__param(5, (0, core_1.inject)('services.NodeService')),
    tslib_1.__param(6, (0, core_1.inject)('datasources.twilio')),
    tslib_1.__metadata("design:paramtypes", [Object, repositories_1.UserRepository,
        repositories_1.AuthClientRepository, Function, Function, Object, datasources_1.TwilioDataSource])
], PingController);
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map