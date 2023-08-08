/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SurveyAnswer {
  surveyResponseOptionId?: string;
  answeredText?: string;
  weightedScore?: number;
}

export const surveyAnswerSchema: Schema<SurveyAnswer> = object({
  surveyResponseOptionId: ['surveyResponseOptionId', optional(string())],
  answeredText: ['answeredText', optional(string())],
  weightedScore: ['weightedScore', optional(number())],
});