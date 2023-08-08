/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  ActivityPlanCardSearch,
  activityPlanCardSearchSchema,
} from '../models/activityPlanCardSearch';
import {
  ApiV1PartcipantsExtrasRequest,
  apiV1PartcipantsExtrasRequestSchema,
} from '../models/apiV1PartcipantsExtrasRequest';
import {
  ApiV1ParticipantsActivityPlanCardsSearchRequest,
  apiV1ParticipantsActivityPlanCardsSearchRequestSchema,
} from '../models/apiV1ParticipantsActivityPlanCardsSearchRequest';
import {
  ApiV1ParticipantsActivityPlansDataResponse,
  apiV1ParticipantsActivityPlansDataResponseSchema,
} from '../models/apiV1ParticipantsActivityPlansDataResponse';
import {
  ApiV1ParticipantsActivityResponsesRequest,
  apiV1ParticipantsActivityResponsesRequestSchema,
} from '../models/apiV1ParticipantsActivityResponsesRequest';
import {
  ApiV1ParticipantsEmailRequest,
  apiV1ParticipantsEmailRequestSchema,
} from '../models/apiV1ParticipantsEmailRequest';
import {
  ApiV1ParticipantsGroupsRequest,
  apiV1ParticipantsGroupsRequestSchema,
} from '../models/apiV1ParticipantsGroupsRequest';
import {
  ApiV1ParticipantsGroupsRequest1,
  apiV1ParticipantsGroupsRequest1Schema,
} from '../models/apiV1ParticipantsGroupsRequest1';
import {
  ApiV1ParticipantsMobileRequest,
  apiV1ParticipantsMobileRequestSchema,
} from '../models/apiV1ParticipantsMobileRequest';
import {
  ApiV1ParticipantsPasswordRequest,
  apiV1ParticipantsPasswordRequestSchema,
} from '../models/apiV1ParticipantsPasswordRequest';
import {
  ApiV1ParticipantsRequest,
  apiV1ParticipantsRequestSchema,
} from '../models/apiV1ParticipantsRequest';
import {
  ApiV1ParticipantsRequest1,
  apiV1ParticipantsRequest1Schema,
} from '../models/apiV1ParticipantsRequest1';
import {
  ApiV1ParticipantsResponse,
  apiV1ParticipantsResponseSchema,
} from '../models/apiV1ParticipantsResponse';
import {
  ApiV1ParticipantsSurveyResponsesRequest,
  apiV1ParticipantsSurveyResponsesRequestSchema,
} from '../models/apiV1ParticipantsSurveyResponsesRequest';
import {
  ApiV1ParticipantsTagsRequest,
  apiV1ParticipantsTagsRequestSchema,
} from '../models/apiV1ParticipantsTagsRequest';
import { Id, idSchema } from '../models/id';
import { Participant, participantSchema } from '../models/participant';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ParticipantsController extends BaseController {
  /**
   * Create a new participant
   *
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1Participants(
    xApiKey?: string,
    body?: ApiV1ParticipantsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiV1ParticipantsResponse>> {
    const req = this.createRequest('POST', '/api/v1/participants');
    const mapped = req.prepareArgs({
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(apiV1ParticipantsResponseSchema, requestOptions);
  }

  /**
   * Get a participant
   *
   * @param userId
   * @param xAPIKEY
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserId(
    userId: number,
    xAPIKEY?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Participant>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userId: [userId, number()],
      xAPIKEY: [xAPIKEY, optional(string())],
    });
    req.header('X-API-KEY', mapped.xAPIKEY);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(participantSchema, requestOptions);
  }

  /**
   * Update the partcipant's profile like First Name, Last Name, Gender, DOB and Preferences
   *
   * @param userId
   * @param xAPIKey
   * @param body
   * @return Response from the API call
   */
  async patchApiV1ParticipantsUserId(
    userId: string,
    xAPIKey?: string,
    body?: ApiV1ParticipantsRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xAPIKey: [xAPIKey, optional(string())],
      body: [body, optional(apiV1ParticipantsRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-API-Key', mapped.xAPIKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Update the participant's email
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdEmail(
    userId: number,
    xApiKey?: string,
    body?: ApiV1ParticipantsEmailRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userId: [userId, number()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsEmailRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/email`;
    return req.call(requestOptions);
  }

  /**
   * @param userId
   * @param xAPIKey
   * @param body
   * @return Response from the API call
   */
  async patchApiV1ParticipantsUserIdPassword(
    userId: string,
    xAPIKey?: string,
    body?: ApiV1ParticipantsPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xAPIKey: [xAPIKey, optional(string())],
      body: [body, optional(apiV1ParticipantsPasswordRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-API-Key', mapped.xAPIKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/password`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * http://localhost:8080/api/v1/participants/:user_id/mobile
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdMobile(
    userId: number,
    xApiKey?: string,
    body?: ApiV1ParticipantsMobileRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userId: [userId, number()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsMobileRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/mobile`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Save the participant's the extra field
   *
   * @param userId
   * @param xAPIKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1Partcipants1Extras(
    userId: string,
    xAPIKey?: string,
    body?: ApiV1PartcipantsExtrasRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xAPIKey: [xAPIKey, optional(string())],
      body: [body, optional(apiV1PartcipantsExtrasRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-API-Key', mapped.xAPIKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/partcipants/${mapped.userId}/extras`;
    return req.call(requestOptions);
  }

  /**
   * Add a tag to the participant.
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1Participants1Tags(
    userId: string,
    xApiKey?: string,
    body?: ApiV1ParticipantsTagsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsTagsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/tags`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Remove the tag from the participant
   *
   * @param userId
   * @param xApiKey
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1Participants1Tags1(
    userId: string,
    xApiKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
    });
    req.header('x-api-key', mapped.xApiKey);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/tags`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Add the participant to the groups
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdGroups(
    userId: string,
    xApiKey?: string,
    body?: ApiV1ParticipantsGroupsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsGroupsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/groups`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Remove the participant from the groups
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdGroups1(
    userId: string,
    xApiKey?: string,
    body?: ApiV1ParticipantsGroupsRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsGroupsRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/groups`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Search the activity plan cards (details) assigned to the participant
   *
   * @param userId
   * @param xApiKey
   * @param page         current page number
   * @param perPage      a number of records per page
   * @param body         All of the search fields are
   *                                                                               optional
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdActivityPlanCardsSearch(
    userId: string,
    xApiKey?: string,
    page?: number,
    perPage?: number,
    body?: ApiV1ParticipantsActivityPlanCardsSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ActivityPlanCardSearch>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      body: [
        body,
        optional(apiV1ParticipantsActivityPlanCardsSearchRequestSchema),
      ],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/activity_plan_cards/search`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(activityPlanCardSearchSchema, requestOptions);
  }

  /**
   * Fetch the participant's all activity data between from date and to date for a particular activity
   * plan. The response contains the activity type and its measure types along with activity data during
   * the given timeframe.
   * The maximum date range is allowed to be 1 year.
   *
   * @param userId
   * @param id
   * @param from    From Date in 'YYYY-MM-DD' format
   * @param to      To Date in 'YYYY-MM-DD' format
   * @return Response from the API call
   */
  async getApiV1ParticipantsUserIdActivityPlansIdData(
    userId: string,
    id: string,
    from?: string,
    to?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiV1ParticipantsActivityPlansDataResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      id: [id, string()],
      from: [from, optional(string())],
      to: [to, optional(string())],
    });
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/activity_plans/${mapped.id}/data`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(
      apiV1ParticipantsActivityPlansDataResponseSchema,
      requestOptions
    );
  }

  /**
   * Submit the survey participation
   *
   * @param userId
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdSurveyResponsesId(
    userId: string,
    xApiKey?: string,
    body?: ApiV1ParticipantsSurveyResponsesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsSurveyResponsesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/survey_responses`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }

  /**
   * Report the given activity
   *
   * @param userId
   * @param id
   * @param xApiKey
   * @param body
   * @return Response from the API call
   */
  async httpLocalhost8080ApiV1ParticipantsUserIdActivityResponses(
    userId: string,
    id: number,
    xApiKey?: string,
    body?: ApiV1ParticipantsActivityResponsesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Id>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      id: [id, number()],
      xApiKey: [xApiKey, optional(string())],
      body: [body, optional(apiV1ParticipantsActivityResponsesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('x-api-key', mapped.xApiKey);
    req.json(mapped.body);
    req.appendTemplatePath`/api/v1/participants/${mapped.userId}/activity_responses`;
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(idSchema, requestOptions);
  }
}
