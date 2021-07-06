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
 * Details for the Oracle Database data asset type.
 */
export interface CreateDataAssetFromOracle extends model.CreateDataAssetDetails {
  /**
   * The Oracle Database hostname.
   */
  "host"?: string;
  /**
   * The Oracle Database port.
   */
  "port"?: string;
  /**
   * The service name for the data asset.
   */
  "serviceName"?: string;
  /**
   * The Oracle Database driver class.
   */
  "driverClass"?: string;
  /**
   * The Oracle Database SID.
   */
  "sid"?: string;
  /**
   * The credential file content from a wallet for the data asset.
   */
  "credentialFileContent"?: string;
  "walletSecret"?: model.SensitiveAttribute;
  "walletPasswordSecret"?: model.SensitiveAttribute;
  "defaultConnection"?: model.CreateConnectionFromOracle;

  "modelType": string;
}

export namespace CreateDataAssetFromOracle {
  export function getJsonObj(obj: CreateDataAssetFromOracle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromOracle)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletPasswordSecret)
          : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromOracle.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: CreateDataAssetFromOracle,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getDeserializedJsonObj(obj) as CreateDataAssetFromOracle)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletPasswordSecret)
          : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromOracle.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
