/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ApiV1ParticipantsTagsRequest {
  tagIds?: string[];
}

export const apiV1ParticipantsTagsRequestSchema: Schema<ApiV1ParticipantsTagsRequest> = object(
  { tagIds: ['tagIds', optional(array(string()))] }
);