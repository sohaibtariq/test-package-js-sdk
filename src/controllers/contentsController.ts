/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ContentError } from '../errors/contentError';
import {
  ApiV1ContentsSearchRequest,
  apiV1ContentsSearchRequestSchema,
} from '../models/apiV1ContentsSearchRequest';
import {
  ContentSearchResult,
  contentSearchResultSchema,
} from '../models/contentSearchResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ContentsController extends BaseController {
  /**
   * Search surveys
   *
   * @param xAPIKEY
   * @param page         current page number
   * @param perPage      a number of records per page
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ContentsSearch(
    xAPIKEY?: string,
    page?: number,
    perPage?: number,
    body?: ApiV1ContentsSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ContentSearchResult>> {
    const req = this.createRequest('POST', '/api/v1/contents/search');
    const mapped = req.prepareArgs({
      xAPIKEY: [xAPIKEY, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      body: [body, optional(apiV1ContentsSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-API-KEY', mapped.xAPIKEY);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(contentSearchResultSchema, requestOptions);
  }

  /**
   * http://localhost:8080/api/v1/contents/:id
   *
   * @param id
   * @param xAPIKEY
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ContentsId(
    id: number,
    xAPIKEY?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, number()],
      xAPIKEY: [xAPIKEY, optional(string())],
    });
    req.header('X-API-KEY', mapped.xAPIKEY);
    req.appendTemplatePath`/api/v1/contents/${mapped.id}`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ContentError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.call(requestOptions);
  }
}