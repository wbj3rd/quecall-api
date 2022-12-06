/// <reference types="express" />
import { Getter } from '@loopback/core';
import { Request } from '@loopback/rest';
import { AuthClient } from '../models/auth-clients.model';
import { User } from '../models/user.model';
import { AuthClientRepository, UserRepository } from '../repositories';
import { TwilioDataSource } from '../datasources';
import { NodeService } from '../services';
/**
 * A simple controller to bounce back http requests
 */
export declare class PingController {
    private req;
    userRepo: UserRepository;
    authClientRepository: AuthClientRepository;
    private readonly getCurrentUser;
    private readonly getCurrentClient;
    protected nodeService: NodeService;
    protected twilioDataSource: TwilioDataSource;
    constructor(req: Request, userRepo: UserRepository, authClientRepository: AuthClientRepository, getCurrentUser: Getter<User>, getCurrentClient: Getter<AuthClient>, nodeService: NodeService, twilioDataSource: TwilioDataSource);
    ping(): object;
    createSolution(): Promise<any>;
    availableNumbers(): Promise<any>;
    purchaseNumber(phoneNumber: string): Promise<any>;
    sendTwilioMessage(body: any): Promise<any>;
    addAgent(body: any): Promise<import("../services").solution>;
    createHoldMusic(body: any): Promise<any>;
    createAgent(body: any): Promise<any>;
    createIncoming(body: any): Promise<unknown>;
    createQueue(body: any): Promise<any>;
    agentChangeNumber(body: any): Promise<any>;
    clientEditQueue(body: any): Promise<any>;
    clientEditMusic(body: any): Promise<any>;
    buyNumber(req: any): Promise<string>;
    loginWithClientUser(req: any): Promise<any>;
    private createJWT;
}
