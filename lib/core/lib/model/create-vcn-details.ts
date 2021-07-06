/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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

export interface CreateVcnDetails {
  /**
   * **Deprecated.** Do *not* set this value. Use `cidrBlocks` instead.
   * Example: `10.0.0.0/16`
   *
   */
  "cidrBlock"?: string;
  /**
   * The list of one or more IPv4 CIDR blocks for the VCN that meet the following criteria:
   * - The CIDR blocks must be valid.
   * - They must not overlap with each other or with the on-premises network CIDR block.
   * - The number of CIDR blocks must not exceed the limit of CIDR blocks allowed per VCN.
   * <p>
   **Important:** Do *not* specify a value for `cidrBlock`. Use this parameter instead.
   *
   */
  "cidrBlocks"?: Array<string>;
  /**
   * The OCID of the compartment to contain the VCN.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * A DNS label for the VCN, used in conjunction with the VNIC's hostname and
* subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Not required to be unique, but it's a best practice to set unique DNS labels
* for VCNs in your tenancy. Must be an alphanumeric string that begins with a letter.
* The value cannot be changed.
* <p>
You must set this value if you want instances to be able to use hostnames to
* resolve other instances in the VCN. Otherwise the Internet and VCN Resolver
* will not work.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Whether IPv6 is enabled for the VCN. Default is `false`.
* If enabled, Oracle will assign the VCN a IPv6 /56 CIDR block.
* For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `true`
* 
    */
  "isIpv6Enabled"?: boolean;
}

export namespace CreateVcnDetails {
  export function getJsonObj(obj: CreateVcnDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVcnDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
