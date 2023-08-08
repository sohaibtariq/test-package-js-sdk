/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Response {
  /** The reference of the activity value of this activity */
  activityValueId?: string;
  value?: string;
}

export const responseSchema: Schema<Response> = object({
  activityValueId: ['activityValueId', optional(string())],
  value: ['value', optional(string())],
});