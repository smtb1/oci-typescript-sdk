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

/**
 * A rule for allowing inbound (`direction`= INGRESS) or outbound (`direction`= EGRESS) IP packets.
 *
 */
export interface UpdateSecurityRuleDetails {
  /**
   * An optional description of your choice for the rule. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
    * Conceptually, this is the range of IP addresses that a packet originating from the instance
* can go to.
* <p>
Allowed values:
* <p>
  * An IP address range in CIDR notation. For example: `192.168.1.0/24` or `2001:0db8:0123:45::/56`
*     IPv6 addressing is supported for all commercial and government regions. See
*     [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
  * The `cidrBlock` value for a {@link Service}, if you're
*     setting up a security rule for traffic destined for a particular `Service` through
*     a service gateway. For example: `oci-phx-objectstorage`.
* <p>
  * The OCID of a {@link NetworkSecurityGroup} in the same
*     VCN. The value can be the NSG that the rule belongs to if the rule's intent is to control
*     traffic between VNICs in the same NSG.
* 
    */
  "destination"?: string;
  /**
    * Type of destination for the rule. Required if `direction` = `EGRESS`.
* <p>
Allowed values:
* <p>
  * `CIDR_BLOCK`: If the rule's `destination` is an IP address range in CIDR notation.
* <p>
  * `SERVICE_CIDR_BLOCK`: If the rule's `destination` is the `cidrBlock` value for a
*     {@link Service} (the rule is for traffic destined for a
*     particular `Service` through a service gateway).
* <p>
  * `NETWORK_SECURITY_GROUP`: If the rule's `destination` is the OCID of a
*     {@link NetworkSecurityGroup}.
* 
    */
  "destinationType"?: UpdateSecurityRuleDetails.DestinationType;
  /**
   * Direction of the security rule. Set to `EGRESS` for rules to allow outbound IP packets,
   * or `INGRESS` for rules to allow inbound IP packets.
   *
   */
  "direction": UpdateSecurityRuleDetails.Direction;
  "icmpOptions"?: model.IcmpOptions;
  /**
    * The Oracle-assigned ID of the security rule that you want to update. You can't change this value.
* <p>
Example: `04ABEC`
* 
    */
  "id": string;
  /**
   * A stateless rule allows traffic in one direction. Remember to add a corresponding
   * stateless rule in the other direction if you need to support bidirectional traffic. For
   * example, if egress traffic allows TCP destination port 80, there should be an ingress
   * rule to allow TCP source port 80. Defaults to false, which means the rule is stateful
   * and a corresponding rule is not necessary for bidirectional traffic.
   *
   */
  "isStateless"?: boolean;
  /**
   * The transport protocol. Specify either `all` or an IPv4 protocol number as
   * defined in
   * [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
   * Options are supported only for ICMP (\"1\"), TCP (\"6\"), UDP (\"17\"), and ICMPv6 (\"58\").
   *
   */
  "protocol": string;
  /**
    * Conceptually, this is the range of IP addresses that a packet coming into the instance
* can come from.
* <p>
Allowed values:
* <p>
  * An IP address range in CIDR notation. For example: `192.168.1.0/24` or `2001:0db8:0123:45::/56`
*     IPv6 addressing is supported for all commercial and government regions. See
*     [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
  * The `cidrBlock` value for a {@link Service}, if you're
*     setting up a security rule for traffic coming from a particular `Service` through
*     a service gateway. For example: `oci-phx-objectstorage`.
* <p>
  * The OCID of a {@link NetworkSecurityGroup} in the same
*     VCN. The value can be the NSG that the rule belongs to if the rule's intent is to control
*     traffic between VNICs in the same NSG.
* 
    */
  "source"?: string;
  /**
   * Type of source for the rule. Required if `direction` = `INGRESS`.
   * <p>
   * `CIDR_BLOCK`: If the rule's `source` is an IP address range in CIDR notation.
   * <p>
   * `SERVICE_CIDR_BLOCK`: If the rule's `source` is the `cidrBlock` value for a
   *     {@link Service} (the rule is for traffic coming from a
   *     particular `Service` through a service gateway).
   * <p>
   * `NETWORK_SECURITY_GROUP`: If the rule's `source` is the OCID of a
   *     {@link NetworkSecurityGroup}.
   *
   */
  "sourceType"?: UpdateSecurityRuleDetails.SourceType;
  "tcpOptions"?: model.TcpOptions;
  "udpOptions"?: model.UdpOptions;
}

export namespace UpdateSecurityRuleDetails {
  export enum DestinationType {
    CidrBlock = "CIDR_BLOCK",
    ServiceCidrBlock = "SERVICE_CIDR_BLOCK",
    NetworkSecurityGroup = "NETWORK_SECURITY_GROUP"
  }

  export enum Direction {
    Egress = "EGRESS",
    Ingress = "INGRESS"
  }

  export enum SourceType {
    CidrBlock = "CIDR_BLOCK",
    ServiceCidrBlock = "SERVICE_CIDR_BLOCK",
    NetworkSecurityGroup = "NETWORK_SECURITY_GROUP"
  }

  export function getJsonObj(obj: UpdateSecurityRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions ? model.IcmpOptions.getJsonObj(obj.icmpOptions) : undefined,

        "tcpOptions": obj.tcpOptions ? model.TcpOptions.getJsonObj(obj.tcpOptions) : undefined,
        "udpOptions": obj.udpOptions ? model.UdpOptions.getJsonObj(obj.udpOptions) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSecurityRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions
          ? model.IcmpOptions.getDeserializedJsonObj(obj.icmpOptions)
          : undefined,

        "tcpOptions": obj.tcpOptions
          ? model.TcpOptions.getDeserializedJsonObj(obj.tcpOptions)
          : undefined,
        "udpOptions": obj.udpOptions
          ? model.UdpOptions.getDeserializedJsonObj(obj.udpOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
