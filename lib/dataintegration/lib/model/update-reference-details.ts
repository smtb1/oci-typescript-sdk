/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Application references that need to be updated.
 */
export interface UpdateReferenceDetails {
  /**
   * A list of options such as `ignoreObjectOnError`.
   */
  "options"?: { [key: string]: string };
  /**
   * The new target object to reference. This should be of type `DataAsset`. The child references can be of type `Connection`.
   */
  "targetObject"?: any;
  /**
   * The list of child references that also need to be updated.
   */
  "childReferences"?: Array<model.ChildReferenceDetail>;
}

export namespace UpdateReferenceDetails {
  export function getJsonObj(obj: UpdateReferenceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "childReferences": obj.childReferences
          ? obj.childReferences.map(item => {
              return model.ChildReferenceDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateReferenceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "childReferences": obj.childReferences
          ? obj.childReferences.map(item => {
              return model.ChildReferenceDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
