/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Result, resultSchema } from './result';

export interface SurveySearchResult {
  results?: Result[];
  total?: number;
}

export const surveySearchResultSchema: Schema<SurveySearchResult> = object({
  results: ['results', optional(array(lazy(() => resultSchema)))],
  total: ['total', optional(number())],
});
