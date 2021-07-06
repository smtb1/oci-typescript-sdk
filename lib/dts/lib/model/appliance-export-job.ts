/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.015
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

export interface ApplianceExportJob {
  "id": string;
  "compartmentId"?: string;
  "bucketName"?: string;
  "displayName"?: string;
  "creationTime"?: Date;
  "lifecycleState"?: ApplianceExportJob.LifecycleState;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  /**
   * Serial Number of the Appliance associated with this Export Job.
   */
  "applianceSerialNumber"?: string;
  /**
   * Passphrase associated with the Appliance.
   */
  "applianceDecryptionPassphrase"?: string;
  /**
   * Shipping Vendor selected to ship the Appliance associated with this job.
   */
  "applianceDeliveryVendor"?: string;
  /**
   * Tracking number associated with the shipment while shipping the Appliance to Customer.
   */
  "applianceDeliveryTrackingNumber"?: string;
  /**
   * Tracking number associated with the shipment while shipping the Appliance back to Oracle.
   */
  "applianceReturnDeliveryTrackingNumber"?: string;
  /**
   * Unique number associated with the security tie used to seal the Appliance case.
   */
  "sendingSecurityTie"?: string;
  /**
   * Unique number associated with the return security tie used to seal the Appliance case.
   */
  "receivingSecurityTie"?: string;
  /**
   * List of objects with names matching this prefix would be part of this export job.
   */
  "prefix"?: string;
  /**
   * The name of the first object in the range of objects that are expected to be part of this export job.
   */
  "rangeStart"?: string;
  /**
   * The name of the last object in the range of objects that are expected to be part of this export job.
   */
  "rangeEnd"?: string;
  /**
   * Total number of objects that are exported in this job.
   */
  "numberOfObjects"?: string;
  /**
   * Total size of objects in Bytes that are exported in this job.
   */
  "totalSizeInBytes"?: string;
  /**
   * First object in the list of objects that are exported in this job.
   */
  "firstObject"?: string;
  /**
   * Last object in the list of objects that are exported in this job.
   */
  "lastObject"?: string;
  /**
   * First object from which the next potential export job could start.
   */
  "nextObject"?: string;
  /**
   * Url of the Manifest File associated with this export job.
   */
  "manifestFile"?: string;
  /**
   * md5 digest of the manifest file.
   */
  "manifestMd5"?: string;
  /**
   * Polices to grant Data Transfer Service to access objects in the Bucket
   */
  "bucketAccessPolicies"?: Array<string>;
  "customerShippingAddress"?: model.ShippingAddress;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ApplianceExportJob {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inprogress = "INPROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ApplianceExportJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplianceExportJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getDeserializedJsonObj(obj.customerShippingAddress)
          : undefined
      }
    };

    return jsonObj;
  }
}
