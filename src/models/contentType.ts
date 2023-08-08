/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface ContentType {
  id?: string;
  contentTypeCode?: string;
  contentTypeName?: string;
  contentTypeDescription?: string | null;
  isActive?: boolean;
}

export const contentTypeSchema: Schema<ContentType> = object({
  id: ['id', optional(string())],
  contentTypeCode: ['contentTypeCode', optional(string())],
  contentTypeName: ['contentTypeName', optional(string())],
  contentTypeDescription: [
    'contentTypeDescription',
    optional(nullable(string())),
  ],
  isActive: ['isActive', optional(boolean())],
});
