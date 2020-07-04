/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateTransferConditionDto } from '../models/create-transfer-condition-dto';
import { TransferConditionDto } from '../models/transfer-condition-dto';

@Injectable({
  providedIn: 'root',
})
export class RulesApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation rulesControllerGetAll
   */
  static readonly RulesControllerGetAllPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerGetAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TransferConditionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.RulesControllerGetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TransferConditionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerGetAll(params?: {

  }): Observable<Array<TransferConditionDto>> {

    return this.rulesControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferConditionDto>>) => r.body as Array<TransferConditionDto>)
    );
  }

  /**
   * Path part for operation rulesControllerPost
   */
  static readonly RulesControllerPostPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerPost$Response(params: {
      body: CreateTransferConditionDto
  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.RulesControllerPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerPost(params: {
      body: CreateTransferConditionDto
  }): Observable<TransferConditionDto> {

    return this.rulesControllerPost$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation rulesControllerPatch
   */
  static readonly RulesControllerPatchPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerPatch$Response(params: {
      body: TransferConditionDto
  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.RulesControllerPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerPatch(params: {
      body: TransferConditionDto
  }): Observable<TransferConditionDto> {

    return this.rulesControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation rulesControllerGet
   */
  static readonly RulesControllerGetPath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerGet$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.RulesControllerGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerGet(params: {
    id: string;

  }): Observable<TransferConditionDto> {

    return this.rulesControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation rulesControllerDelete
   */
  static readonly RulesControllerDeletePath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerDelete$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.RulesControllerDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerDelete(params: {
    id: string;

  }): Observable<void> {

    return this.rulesControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
