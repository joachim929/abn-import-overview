/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateLogicDto } from '../models/create-logic-dto';
import { LogicDto } from '../models/logic-dto';

@Injectable({
  providedIn: 'root',
})
export class LogicApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation logicControllerGetAll
   */
  static readonly LogicControllerGetAllPath = '/logic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logicControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerGetAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<LogicDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LogicApiService.LogicControllerGetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogicDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logicControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerGetAll(params?: {

  }): Observable<Array<LogicDto>> {

    return this.logicControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogicDto>>) => r.body as Array<LogicDto>)
    );
  }

  /**
   * Path part for operation logicControllerPost
   */
  static readonly LogicControllerPostPath = '/logic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logicControllerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logicControllerPost$Response(params: {
      body: CreateLogicDto
  }): Observable<StrictHttpResponse<LogicDto>> {

    const rb = new RequestBuilder(this.rootUrl, LogicApiService.LogicControllerPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LogicDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logicControllerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logicControllerPost(params: {
      body: CreateLogicDto
  }): Observable<LogicDto> {

    return this.logicControllerPost$Response(params).pipe(
      map((r: StrictHttpResponse<LogicDto>) => r.body as LogicDto)
    );
  }

  /**
   * Path part for operation logicControllerPatch
   */
  static readonly LogicControllerPatchPath = '/logic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logicControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logicControllerPatch$Response(params: {
      body: LogicDto
  }): Observable<StrictHttpResponse<LogicDto>> {

    const rb = new RequestBuilder(this.rootUrl, LogicApiService.LogicControllerPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LogicDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logicControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logicControllerPatch(params: {
      body: LogicDto
  }): Observable<LogicDto> {

    return this.logicControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<LogicDto>) => r.body as LogicDto)
    );
  }

  /**
   * Path part for operation logicControllerGet
   */
  static readonly LogicControllerGetPath = '/logic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logicControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerGet$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<LogicDto>> {

    const rb = new RequestBuilder(this.rootUrl, LogicApiService.LogicControllerGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LogicDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logicControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerGet(params: {
    id: string;

  }): Observable<LogicDto> {

    return this.logicControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<LogicDto>) => r.body as LogicDto)
    );
  }

  /**
   * Path part for operation logicControllerDelete
   */
  static readonly LogicControllerDeletePath = '/logic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logicControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerDelete$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LogicApiService.LogicControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `logicControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logicControllerDelete(params: {
    id: string;

  }): Observable<void> {

    return this.logicControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
