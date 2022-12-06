"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
const authorization_1 = require("@loopback/authorization");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const loopback4_authentication_1 = require("loopback4-authentication");
//import {ResourceOwnerVerifyProvider} from 'loopback4-authentication/dist/strategies';
const lakefs_1 = require("lakefs");
const path_1 = tslib_1.__importDefault(require("path"));
const resource_owner_verify_provider_1 = require("./providers/auth/resource-owner-verify.provider");
const sequence_1 = require("./sequence");
const keys_1 = require("./types/keys");
const { PassThrough } = require('stream');
class App extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Add authentication component
        this.component(loopback4_authentication_1.AuthenticationComponent);
        console.log("OPTIONS");
        console.log(options.fileStorageDirectory);
        this.configureFileUpload(options.fileStorageDirectory);
        // ---------- MAKE SURE THE FOLLOWING PARTS ARE CORRECT
        // bind set authorization options
        const authoptions = {
            precedence: authorization_1.AuthorizationDecision.DENY,
            defaultDecision: authorization_1.AuthorizationDecision.DENY,
        };
        // mount authorization component
        const binding = this.component(authorization_1.AuthorizationComponent);
        // configure authorization component
        this.configure(binding.key).to(authoptions);
        this.bind(loopback4_authentication_1.Strategies.Passport.RESOURCE_OWNER_PASSWORD_VERIFIER).toProvider(resource_owner_verify_provider_1.ResourceOwnerVerifyProvider);
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    /**
     * Configure `multer` options for file upload
     */
    async configureFileUpload(destination) {
        console.log("configure");
        // const client = new S3Client({
        //   credentials: fromIni({profile: 'local'}),
        //   endpoint: "http://localhost:8000",
        //   bucketEndpoint: false,
        //   forcePathStyle: true,
        //   region: "us-east-1"
        // });
        // // Upload files to `dist/.sandbox` by default
        // destination = destination ?? path.join(__dirname, '../call-center');
        // console.log(destination)
        // this.bind(STORAGE_DIRECTORY).to(destination);
        // const multerOptions: multer.Options = {
        //   storage: multerS3({
        //     s3: client,
        //     bucket: 'call-center2',
        //     key: function (req, file, cb) {
        //       cb(null, "main/" + file.fieldname)
        //     }
        //   }),
        //   fileFilter: (req, file, cb) => {
        //     cb(null, true)
        //   },
        // }
        let lakefs = lakefs_1.lakeFS;
        console.log(lakefs);
        //console.log("Upload file to:", `s3://${input.Bucket}/${input.Key}`);
        // Configure the file upload service with multer options
        this.configure(keys_1.FILE_UPLOAD_SERVICE).to(lakefs({ profile: 'local' }, 'call-center2', "http://localhost:8000", "public"));
    }
}
exports.App = App;
//# sourceMappingURL=application.js.map