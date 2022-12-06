import {AuthorizationComponent, AuthorizationDecision, AuthorizationOptions} from '@loopback/authorization';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import {AuthenticationComponent, Strategies} from 'loopback4-authentication';
//import {ResourceOwnerVerifyProvider} from 'loopback4-authentication/dist/strategies';
import {lakeFS} from 'lakefs';
import path from 'path';
import {ResourceOwnerVerifyProvider} from './providers/auth/resource-owner-verify.provider';
import {MySequence} from './sequence';
import {FILE_UPLOAD_SERVICE} from './types/keys';
const {PassThrough} = require('stream');

export {ApplicationConfig};

export class App<ApiApplication, FileUploadApplication> extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    // Set up the custom sequence
    this.sequence(MySequence);
    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));
    // Add authentication component
    this.component(AuthenticationComponent);
    console.log("OPTIONS")
    console.log(options.fileStorageDirectory)
    this.configureFileUpload(options.fileStorageDirectory);
    // ---------- MAKE SURE THE FOLLOWING PARTS ARE CORRECT
    // bind set authorization options
    const authoptions: AuthorizationOptions = {
      precedence: AuthorizationDecision.DENY,
      defaultDecision: AuthorizationDecision.DENY,
    };
    // mount authorization component
    const binding = this.component(AuthorizationComponent);
    // configure authorization component
    this.configure(binding.key).to(authoptions);

    this.bind(Strategies.Passport.RESOURCE_OWNER_PASSWORD_VERIFIER).toProvider(
      ResourceOwnerVerifyProvider,
    );
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
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
  protected async configureFileUpload(destination?: string) {
    console.log("configure")
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
    let lakefs = lakeFS
    console.log(lakefs)
    //console.log("Upload file to:", `s3://${input.Bucket}/${input.Key}`);
    // Configure the file upload service with multer options
    this.configure(FILE_UPLOAD_SERVICE).to(lakefs({profile: 'local'}, 'call-center2', "http://localhost:8000", "public"));
  }
}


