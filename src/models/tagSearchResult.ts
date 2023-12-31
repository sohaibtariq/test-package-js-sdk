/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema } from '../schema';
import { Tag, tagSchema } from './tag';

/** Search result model containing an array of searched items and a total count */
export interface TagSearchResult {
  results: Tag[];
  total: number;
}

export const tagSearchResultSchema: Schema<TagSearchResult> = object({
  results: ['results', array(lazy(() => tagSchema))],
  total: ['total', number()],
});
