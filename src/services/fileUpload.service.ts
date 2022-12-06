// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-file-transfer
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {CompleteMultipartUploadCommand, CreateMultipartUploadCommand, S3Client, UploadPartCommand} from '@aws-sdk/client-s3';
import {fromIni} from '@aws-sdk/credential-providers';
import {
  BindingScope,
  config,
  ContextTags,
  injectable,
  Provider
} from '@loopback/core';
import multer from 'multer';
import {FILE_UPLOAD_SERVICE} from '../types/keys';
import {FileUploadHandler} from '../types/type';
var concat = require('concat-stream')

/**
 * A provider to return an `Express` request handler from `multer` middleware
 */
@injectable({
  scope: BindingScope.TRANSIENT,
  tags: {[ContextTags.KEY]: FILE_UPLOAD_SERVICE},
})
export class FileUploadProvider implements Provider<FileUploadHandler> {
  constructor(@config() private options: multer.Options = {}) {
    console.log(this.options)
    if (!this.options.storage) {
      // Default to in-memory storage
      this.options.storage = multer.memoryStorage();
    }
  }

  value(): FileUploadHandler {
    console.log('FUH')
    return multer(this.options).any();

  }
}



class wulter {

  async any(req: any, file: any, cb: any) {
    file.stream.pipe(concat({encoding: 'buffer'}, function (data: any) {
      console.log(data)
      cb(null, {
        buffer: data,
        size: data.length
      })
    }))
    return req
  }

  handleUpload = async function handleUpload(req: any, file: any, cb: any) {
    console.log("HANDLE")
    //console.log(Object.keys(req))
    //console.log(req.body)
    const client = new S3Client({
      credentials: fromIni({profile: 'local'}),
      endpoint: "http://localhost:8000",
      bucketEndpoint: false,
      forcePathStyle: true

    });
    var input = {
      Bucket: "call-center2",
      Key: "main/" + file.originalname,

    };
    const command = new CreateMultipartUploadCommand(input);
    const response = await client.send(command);
    var input2 = {
      Body: file.stream,
      UploadId: response.UploadId,
      Bucket: response.Bucket,
      Key: response.Key,
      PartNumber: 1,
    }
    const command2 = new UploadPartCommand(input2);
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
    }

    const command3 = new CompleteMultipartUploadCommand(input3);
    const response3 = await client.send(command3);
    //console.log(req)
    return response3

  }
}
