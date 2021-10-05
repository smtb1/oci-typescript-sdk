/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Optional additional properties for dump transfer.
 *
 */
export interface DumpTransferDetails {
  "source"?: model.OciCliDumpTransferDetails | model.CurlTransferDetails;
  "target"?: model.OciCliDumpTransferDetails | model.CurlTransferDetails;
}

export namespace DumpTransferDetails {
  export function getJsonObj(obj: DumpTransferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.HostDumpTransferDetails.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.HostDumpTransferDetails.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DumpTransferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.HostDumpTransferDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.HostDumpTransferDetails.getDeserializedJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
}
