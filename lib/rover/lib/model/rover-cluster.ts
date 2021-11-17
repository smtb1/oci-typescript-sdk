/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Description of RoverCluster.
 */
export interface RoverCluster {
  /**
   * The OCID of RoverCluster.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the RoverCluster.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * Size of the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clusterSize": number;
  /**
   * The time the the RoverCluster was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The current state of the RoverCluster.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  "customerShippingAddress"?: model.ShippingAddress;
  /**
   * The summary of nodes that are part of this cluster.
   */
  "nodes"?: Array<model.RoverNodeSummary>;
  /**
   * The type of enclosure rover nodes in this cluster are shipped in.
   */
  "enclosureType"?: model.EnclosureType;
  /**
   * Time when customer received the cluster.
   */
  "timeCustomerReceived"?: Date;
  /**
   * Time when customer returned the cluster.
   */
  "timeCustomerReturned"?: Date;
  /**
   * Tracking information for device shipping.
   */
  "deliveryTrackingInfo"?: string;
  /**
   * List of existing workloads that should be provisioned on the nodes.
   */
  "clusterWorkloads"?: Array<model.RoverWorkload>;
  /**
   * Root password for the rover cluster.
   */
  "superUserPassword"?: string;
  /**
   * Password to unlock the rover cluster.
   */
  "unlockPassphrase"?: string;
  /**
   * Name of point of contact for this order if customer is picking up.
   */
  "pointOfContact"?: string;
  /**
   * Phone number of point of contact for this order if customer is picking up.
   */
  "pointOfContactPhoneNumber"?: string;
  /**
   * Preference for device delivery.
   */
  "shippingPreference"?: RoverCluster.ShippingPreference;
  /**
   * Tracking Url for the shipped Rover Cluster.
   */
  "oracleShippingTrackingUrl"?: string;
  /**
   * Shipping vendor of choice for orace to customer shipping.
   */
  "shippingVendor"?: string;
  /**
   * Expected date when customer wants to pickup the device if they chose customer pickup.
   */
  "timePickupExpected"?: Date;
  /**
   * Start time for the window to pickup the device from customer.
   */
  "timeReturnWindowStarts"?: Date;
  /**
   * End time for the window to pickup the device from customer.
   */
  "timeReturnWindowEnds"?: Date;
  /**
   * Uri to download return shipping label.
   */
  "returnShippingLabelUri"?: string;
  /**
   * The flag indicating that customer requests data to be imported to OCI upon Rover cluster return.
   */
  "isImportRequested"?: boolean;
  /**
   * An OCID of a compartment where data will be imported to upon Rover cluster return.
   */
  "importCompartmentId"?: string;
  /**
   * Name of a bucket where files from NFS share will be imported to upon Rover cluster return.
   */
  "importFileBucket"?: string;
  /**
   * Validation code returned by data validation tool. Required for return shipping label generation if data import was requested.
   */
  "dataValidationCode"?: string;
  /**
   * The link to pre-authenticated request for a bucket where image workloads are moved.
   */
  "imageExportPar"?: string;
  /**
   * The tags associated with tagSlug.
   *
   */
  "tags"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RoverCluster {
  export enum ShippingPreference {
    OracleShipped = "ORACLE_SHIPPED",
    CustomerPickup = "CUSTOMER_PICKUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RoverCluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.RoverNodeSummary.getJsonObj(item);
            })
          : undefined,

        "clusterWorkloads": obj.clusterWorkloads
          ? obj.clusterWorkloads.map(item => {
              return model.RoverWorkload.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RoverCluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getDeserializedJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.RoverNodeSummary.getDeserializedJsonObj(item);
            })
          : undefined,

        "clusterWorkloads": obj.clusterWorkloads
          ? obj.clusterWorkloads.map(item => {
              return model.RoverWorkload.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
