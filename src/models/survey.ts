/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { SurveySection, surveySectionSchema } from './surveySection';

export interface Survey {
  id?: string;
  code: string;
  name: string;
  descriptionShort?: unknown | null;
  descriptionLong?: unknown | null;
  externalReference?: unknown | null;
  surveyTags?: unknown[];
  surveyGroups?: unknown[];
  surveySections?: SurveySection[];
  isActive: boolean;
}

export const surveySchema: Schema<Survey> = object({
  id: ['id', optional(string())],
  code: ['code', string()],
  name: ['name', string()],
  descriptionShort: ['descriptionShort', optional(nullable(unknown()))],
  descriptionLong: ['descriptionLong', optional(nullable(unknown()))],
  externalReference: ['externalReference', optional(nullable(unknown()))],
  surveyTags: ['surveyTags', optional(array(unknown()))],
  surveyGroups: ['surveyGroups', optional(array(unknown()))],
  surveySections: [
    'surveySections',
    optional(array(lazy(() => surveySectionSchema))),
  ],
  isActive: ['isActive', boolean()],
});
