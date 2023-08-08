/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ApiV1AuthTokenUpgradeResponse {
  customToken?: string;
  expiresIn?: number;
}

export const apiV1AuthTokenUpgradeResponseSchema: Schema<ApiV1AuthTokenUpgradeResponse> = object(
  {
    customToken: ['customToken', optional(string())],
    expiresIn: ['expiresIn', optional(number())],
  }
);
