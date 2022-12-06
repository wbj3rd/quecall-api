"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const loopback4_authentication_1 = require("loopback4-authentication");
let MySequence = class MySequence {
    constructor(findRoute, parseParams, invoke, send, reject, authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
        this.invokeMiddleware = () => false;
    }
    async handle(context) {
        try {
            let args;
            console.log("SEQUENCE HANDLE");
            const { request, response } = context;
            //console.log(request)
            const finished = await this.invokeMiddleware(context);
            if (finished)
                return;
            console.log("SEQUENCE HANDLE2");
            const route = this.findRoute(request);
            // console.log(request)
            //console.log("SEQUENCE HANDLE2.5", route)
            //console.log(route.pathParams)
            try {
                args = await this.parseParams(request, route);
                request.body = args[args.length - 1];
                if (request.body) {
                    const d = jwt.decode(request.body.token);
                    if (d === null || d === void 0 ? void 0 : d.realm_access.roles.includes("Client")) {
                        console.log("REALM ACCCESS To Add Number");
                        request.body.password = "password";
                        request.body.username = "admin";
                        console.log(d === null || d === void 0 ? void 0 : d.azp);
                        console.log(request.body.client_id);
                        //if (d?.azp === request.body.client_id) { }
                        request.body.client_id = d === null || d === void 0 ? void 0 : d.azp;
                        //console.log(request.body)
                        const r = await this.authenticateRequest(request);
                    }
                    console.log("SEQUENCE HANDLE4");
                }
                //console.log(r)
                const result = await this.invoke(route, args);
                this.send(response, result);
            }
            catch (error) {
                console.log(error);
            }
            //get token and get user id
            console.log("SEQUENCE HANDLE3");
        }
        catch (err) {
            this.reject(context, err);
        }
    }
};
tslib_1.__decorate([
    (0, core_1.inject)(rest_1.SequenceActions.INVOKE_MIDDLEWARE, { optional: true }),
    tslib_1.__metadata("design:type", Function)
], MySequence.prototype, "invokeMiddleware", void 0);
MySequence = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.SequenceActions.FIND_ROUTE)),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(2, (0, core_1.inject)(rest_1.SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(3, (0, core_1.inject)(rest_1.SequenceActions.SEND)),
    tslib_1.__param(4, (0, core_1.inject)(rest_1.SequenceActions.REJECT)),
    tslib_1.__param(5, (0, core_1.inject)(loopback4_authentication_1.AuthenticationBindings.USER_AUTH_ACTION)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map