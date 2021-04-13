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
 * Migration Phase Summary of details.
 *
 */
export interface MigrationPhaseSummary {
  /**
   * ODMS Job phase name
   *
   */
  "name": model.OdmsJobPhases;
  /**
   * Action recommended for this phase. If not included in the response, there is no recommended action for the phase.
   *
   */
  "recommendedAction"?: model.OdmsPhaseActions;
  /**
   * Array of actions for the corresponding phase. Empty array would indicate there is no supported action for the phase.
   *
   */
  "supportedActions": Array<model.OdmsPhaseActions>;
}

export namespace MigrationPhaseSummary {
  export function getJsonObj(obj: MigrationPhaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportedActions": obj.supportedActions
          ? obj.supportedActions.map(item => {
              return model.OdmsPhaseActions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
