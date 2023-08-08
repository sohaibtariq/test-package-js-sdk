/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface SurveyResponseOption {
  id?: string;
  label: string;
  score?: number;
  descriptionShort?: unknown | null;
  descriptionLong?: unknown | null;
  isActive?: boolean;
}

export const surveyResponseOptionSchema: Schema<SurveyResponseOption> = object({
  id: ['id', optional(string())],
  label: ['label', string()],
  score: ['score', optional(number())],
  descriptionShort: ['descriptionShort', optional(nullable(unknown()))],
  descriptionLong: ['descriptionLong', optional(nullable(unknown()))],
  isActive: ['isActive', optional(boolean())],
});