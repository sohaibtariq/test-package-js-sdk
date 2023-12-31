/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Data1, data1Schema } from './data1';
import { UiConfigs2, uiConfigs2Schema } from './uiConfigs2';

export interface Result1 {
  id?: string;
  activityPlanId?: string;
  title?: string;
  description?: string | null;
  imageUrl?: string;
  isOneOff?: boolean;
  reportedAt?: string | null;
  data?: Data1;
  associatedJourney?: string | null;
  uiConfigs?: UiConfigs2;
}

export const result1Schema: Schema<Result1> = object({
  id: ['id', optional(string())],
  activityPlanId: ['activityPlanId', optional(string())],
  title: ['title', optional(string())],
  description: ['description', optional(nullable(string()))],
  imageUrl: ['imageUrl', optional(string())],
  isOneOff: ['isOneOff', optional(boolean())],
  reportedAt: ['reportedAt', optional(nullable(string()))],
  data: ['data', optional(lazy(() => data1Schema))],
  associatedJourney: ['associatedJourney', optional(nullable(string()))],
  uiConfigs: ['uiConfigs', optional(lazy(() => uiConfigs2Schema))],
});
