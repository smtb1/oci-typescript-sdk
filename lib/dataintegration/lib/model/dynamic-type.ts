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
 * The dynamic type.
 */
export interface DynamicType extends model.BaseType {
  "typeHandler"?: model.RuleTypeConfig;
  "configDefinition"?: model.ConfigDefinition;

  "modelType": string;
}

export namespace DynamicType {
  export function getJsonObj(obj: DynamicType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as DynamicType)),
      ...{
        "typeHandler": obj.typeHandler
          ? model.DynamicTypeHandler.getJsonObj(obj.typeHandler)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DYNAMIC_TYPE";
  export function getDeserializedJsonObj(obj: DynamicType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as DynamicType)),
      ...{
        "typeHandler": obj.typeHandler
          ? model.DynamicTypeHandler.getDeserializedJsonObj(obj.typeHandler)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getDeserializedJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}
