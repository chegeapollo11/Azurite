/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
// tslint:disable:max-line-length

import * as Models from "../artifacts/models";
import Context from "../Context";

export default interface IMessageIdHandler {
  update(queueMessage: Models.QueueMessage, popReceipt: string, visibilitytimeout: number, options: Models.MessageIdUpdateOptionalParams, context: Context): Promise<Models.MessageIdUpdateResponse>;
  delete(popReceipt: string, options: Models.MessageIdDeleteMethodOptionalParams, context: Context): Promise<Models.MessageIdDeleteResponse>;
}
