/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
* The configuration details for implementing load balancer cookie session persistence (LB cookie stickiness).
* <p>
Session persistence enables the Load Balancing service to direct all requests that originate from a single logical
* client to a single backend web server. For more information, see
* [Session Persistence](https://docs.cloud.oracle.com/Content/Balance/Reference/sessionpersistence.htm).
* <p>
When you configure LB cookie stickiness, the load balancer inserts a cookie into the response. The parameters configured
* in the cookie enable session stickiness. This method is useful when you have applications and Web backend services
* that cannot generate their own cookies.
* <p>
Path route rules take precedence to determine the target backend server. The load balancer verifies that session stickiness
* is enabled for the backend server and that the cookie configuration (domain, path, and cookie hash) is valid for the
* target. The system ignores invalid cookies.
* <p>
To disable LB cookie stickiness on a running load balancer, use the
* {@link #updateBackendSet(UpdateBackendSetRequest) updateBackendSet} operation and specify `null` for the
* `LBCookieSessionPersistenceConfigurationDetails` object.
* <p>
Example: `LBCookieSessionPersistenceConfigurationDetails: null`
* <p>
**Note:** `SessionPersistenceConfigurationDetails` (application cookie stickiness) and `LBCookieSessionPersistenceConfigurationDetails`
* (LB cookie stickiness) are mutually exclusive. An error results if you try to enable both types of session persistence.
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface LBCookieSessionPersistenceConfigurationDetails {
  /**
    * The name of the cookie inserted by the load balancer. If this field is not configured, the cookie name defaults
* to \"X-Oracle-BMC-LBS-Route\".
* <p>
Example: `example_cookie`
* <p>
**Notes:**
* <p>
*  Ensure that the cookie name used at the backend application servers is different from the cookie name used
*    at the load balancer. To minimize the chance of name collision, Oracle recommends that you use a prefix
*    such as \"X-Oracle-OCI-\" for this field.
* <p>
*  If a backend server and the load balancer both insert cookies with the same name, the client or browser
*    behavior can vary depending on the domain and path values associated with the cookie. If the name, domain,
*    and path values of the `Set-cookie` generated by a backend server and the `Set-cookie` generated by the
*    load balancer are all the same, the client or browser treats them as one cookie and returns only one of
*    the cookie values in subsequent requests. If both `Set-cookie` names are the same, but the domain and path
*    names are different, the client or browser treats them as two different cookies.
* 
    */
  "cookieName"?: string;
  /**
    * Whether the load balancer is prevented from directing traffic from a persistent session client to
* a different backend server if the original server is unavailable. Defaults to false.
* <p>
Example: `false`
* 
    */
  "disableFallback"?: boolean;
  /**
    * The domain in which the cookie is valid. The `Set-cookie` header inserted by the load balancer contains a
* domain attribute with the specified value.
* <p>
This attribute has no default value. If you do not specify a value, the load balancer does not insert the domain
* attribute into the `Set-cookie` header.
* <p>
**Notes:**
* <p>
*  [RFC 6265 - HTTP State Management Mechanism](https://www.ietf.org/rfc/rfc6265.txt) describes client and
*    browser behavior when the domain attribute is present or not present in the `Set-cookie` header.
* <p>
   If the value of the `Domain` attribute is `example.com` in the `Set-cookie` header, the client includes
*    the same cookie in the `Cookie` header when making HTTP requests to `example.com`, `www.example.com`, and
*    `www.abc.example.com`. If the `Domain` attribute is not present, the client returns the cookie only for
*    the domain to which the original request was made.
* <p>
*  Ensure that this attribute specifies the correct domain value. If the `Domain` attribute in the `Set-cookie`
*    header does not include the domain to which the original request was made, the client or browser might reject
*    the cookie. As specified in RFC 6265, the client accepts a cookie with the `Domain` attribute value `example.com`
*    or `www.example.com` sent from `www.example.com`. It does not accept a cookie with the `Domain` attribute
*    `abc.example.com` or `www.abc.example.com` sent from `www.example.com`.
* <p>
Example: `example.com`
* 
    */
  "domain"?: string;
  /**
    * The path in which the cookie is valid. The `Set-cookie header` inserted by the load balancer contains a `Path`
* attribute with the specified value.
* <p>
Clients include the cookie in an HTTP request only if the path portion of the request-uri matches, or is a
* subdirectory of, the cookie's `Path` attribute.
* <p>
The default value is `/`.
* <p>
Example: `/example`
* 
    */
  "path"?: string;
  /**
    * The amount of time the cookie remains valid. The `Set-cookie` header inserted by the load balancer contains
* a `Max-Age` attribute with the specified value.
* <p>
The specified value must be at least one second. There is no default value for this attribute. If you do not
* specify a value, the load balancer does not include the `Max-Age` attribute in the `Set-cookie` header. In
* most cases, the client or browser retains the cookie until the current session ends, as defined by the client.
* <p>
Example: `3600`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "maxAgeInSeconds"?: number;
  /**
    * Whether the `Set-cookie` header should contain the `Secure` attribute. If `true`, the `Set-cookie` header
* inserted by the load balancer contains the `Secure` attribute, which directs the client or browser to send the
* cookie only using a secure protocol.
* <p>
**Note:** If you set this field to `true`, you cannot associate the corresponding backend set with an HTTP
* listener.
* <p>
Example: `true`
* 
    */
  "isSecure"?: boolean;
  /**
    * Whether the `Set-cookie` header should contain the `HttpOnly` attribute. If `true`, the `Set-cookie` header
* inserted by the load balancer contains the `HttpOnly` attribute, which limits the scope of the cookie to HTTP
* requests. This attribute directs the client or browser to omit the cookie when providing access to cookies
* through non-HTTP APIs. For example, it restricts the cookie from JavaScript channels.
* <p>
Example: `true`
* 
    */
  "isHttpOnly"?: boolean;
}

export namespace LBCookieSessionPersistenceConfigurationDetails {
  export function getJsonObj(obj: LBCookieSessionPersistenceConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: LBCookieSessionPersistenceConfigurationDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
