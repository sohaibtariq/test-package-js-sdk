/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  nullable,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface ActivityValue {
  id?: string;
  measureTypeId?: string;
  measureTypeName?: string;
  measureDataType?: string;
  measureTypeOptions?: string[];
  valueDataType?: string;
  reportedValue?: unknown | null;
}

export const activityValueSchema: Schema<ActivityValue> = object({
  id: ['id', optional(string())],
  measureTypeId: ['MeasureTypeId', optional(string())],
  measureTypeName: ['measureTypeName', optional(string())],
  measureDataType: ['measureDataType', optional(string())],
  measureTypeOptions: ['measureTypeOptions', optional(array(string()))],
  valueDataType: ['valueDataType', optional(string())],
  reportedValue: ['reportedValue', optional(nullable(unknown()))],
});