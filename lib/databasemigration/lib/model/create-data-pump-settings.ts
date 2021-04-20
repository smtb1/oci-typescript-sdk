/**
 * REST API for Zero Downtime Migration (Oracle Database Migration Service --ODMS-- as customer-facing service name)
 * Provides users the ability to perform Zero Downtime migration operations
 * OpenAPI spec version: 20200720
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
 * Optional settings for Datapump Export and Import jobs
 *
 */
export interface CreateDataPumpSettings {
  /**
   * DataPump job mode.
   * Refer to docs.oracle.com/en/database/oracle/oracle-database/19/arpls/ODMS_DATAPUMP.html#GUID-92C2CB46-8BC9-414D-B62E-79CD788C1E62__BABBDEHD
   *
   */
  "jobMode"?: model.DataPumpJobMode;
  "dataPumpParameters"?: model.CreateDataPumpParameters;
  /**
   * Defines remapping to be applied to objects as they are processed.
   * Refer to https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/ODMS_DATAPUMP.html#GUID-0FC32790-91E6-4781-87A3-229DE024CB3D.
   *
   */
  "metadataRemaps"?: Array<model.MetadataRemap>;
  "exportDirectoryObject"?: model.CreateDirectoryObject;
  "importDirectoryObject"?: model.CreateDirectoryObject;
}

export namespace CreateDataPumpSettings {
  export function getJsonObj(obj: CreateDataPumpSettings): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataPumpParameters": obj.dataPumpParameters
          ? model.CreateDataPumpParameters.getJsonObj(obj.dataPumpParameters)
          : undefined,
        "metadataRemaps": obj.metadataRemaps
          ? obj.metadataRemaps.map(item => {
              return model.MetadataRemap.getJsonObj(item);
            })
          : undefined,
        "exportDirectoryObject": obj.exportDirectoryObject
          ? model.CreateDirectoryObject.getJsonObj(obj.exportDirectoryObject)
          : undefined,
        "importDirectoryObject": obj.importDirectoryObject
          ? model.CreateDirectoryObject.getJsonObj(obj.importDirectoryObject)
          : undefined
      }
    };

    return jsonObj;
  }
}