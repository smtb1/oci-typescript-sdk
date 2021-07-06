/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The AWR snapshot range list.
 */
export interface AwrDbSnapshotRangeCollection extends model.AwrQueryResult {
  /**
   * A list of AWR snapshot range summary data.
   */
  "items"?: Array<model.AwrDbSnapshotRangeSummary>;

  "awrResultType": string;
}

export namespace AwrDbSnapshotRangeCollection {
  export function getJsonObj(obj: AwrDbSnapshotRangeCollection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDbSnapshotRangeCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbSnapshotRangeSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_SNAPSHOT_RANGE_SET";
  export function getDeserializedJsonObj(
    obj: AwrDbSnapshotRangeCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDbSnapshotRangeCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbSnapshotRangeSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
