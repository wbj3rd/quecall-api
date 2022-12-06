"use strict";
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-file-transfer
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadProvider = void 0;
const tslib_1 = require("tslib");
const client_s3_1 = require("@aws-sdk/client-s3");
const credential_providers_1 = require("@aws-sdk/credential-providers");
const core_1 = require("@loopback/core");
const multer_1 = tslib_1.__importDefault(require("multer"));
const keys_1 = require("../types/keys");
var concat = require('concat-stream');
/**
 * A provider to return an `Express` request handler from `multer` middleware
 */
let FileUploadProvider = class FileUploadProvider {
    constructor(options = {}) {
        this.options = options;
        console.log(this.options);
        if (!this.options.storage) {
            // Default to in-memory storage
            this.options.storage = multer_1.default.memoryStorage();
        }
    }
    value() {
        console.log('FUH');
        return (0, multer_1.default)(this.options).any();
    }
};
FileUploadProvider = tslib_1.__decorate([
    (0, core_1.injectable)({
        scope: core_1.BindingScope.TRANSIENT,
        tags: { [core_1.ContextTags.KEY]: keys_1.FILE_UPLOAD_SERVICE },
    }),
    tslib_1.__param(0, (0, core_1.config)()),
    tslib_1.__metadata("design:paramtypes", [Object])
], FileUploadProvider);
exports.FileUploadProvider = FileUploadProvider;
class wulter {
    constructor() {
        this.handleUpload = async function handleUpload(req, file, cb) {
            console.log("HANDLE");
            //console.log(Object.keys(req))
            //console.log(req.body)
            const client = new client_s3_1.S3Client({
                credentials: (0, credential_providers_1.fromIni)({ profile: 'local' }),
                endpoint: "http://localhost:8000",
                bucketEndpoint: false,
                forcePathStyle: true
            });
            var input = {
                Bucket: "call-center2",
                Key: "main/" + file.originalname,
            };
            const command = new client_s3_1.CreateMultipartUploadCommand(input);
            const response = await client.send(command);
            var input2 = {
                Body: file.stream,
                UploadId: response.UploadId,
                Bucket: response.Bucket,
                Key: response.Key,
                PartNumber: 1,
            };
            const command2 = new client_s3_1.UploadPartCommand(input2);
            const response2 = await client.send(command2);
            var input3 = {
                Bucket: response.Bucket,
                Key: response.Key,
                UploadId: response.UploadId,
                MultipartUpload: {
                    Parts: [
                        {
                            ETag: response2.ETag,
                            PartNumber: 1
                        }
                    ]
                }
            };
            const command3 = new client_s3_1.CompleteMultipartUploadCommand(input3);
            const response3 = await client.send(command3);
            //console.log(req)
            return response3;
        };
    }
    async any(req, file, cb) {
        file.stream.pipe(concat({ encoding: 'buffer' }, function (data) {
            console.log(data);
            cb(null, {
                buffer: data,
                size: data.length
            });
        }));
        return req;
    }
}
//# sourceMappingURL=fileUpload.service.js.map