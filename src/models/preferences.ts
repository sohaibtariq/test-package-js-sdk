/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface Preferences {
  channelId?: string;
  timezone?: string;
  reminderHour?: number[];
}

export const preferencesSchema: Schema<Preferences> = object({
  channelId: ['channelId', optional(string())],
  timezone: ['timezone', optional(string())],
  reminderHour: ['reminderHour', optional(array(number()))],
});
