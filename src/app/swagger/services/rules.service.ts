/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Rule } from '../models/rule';
import { RuleDto } from '../models/rule-dto';

@Injectable({
  providedIn: 'root',
})
export class RulesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
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
  rulesControllerGet$Response(params?: {

  }): Observable<StrictHttpResponse<RuleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.RulesControllerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RuleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rulesControllerGet(params?: {

  }): Observable<RuleDto> {

    return this.rulesControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<RuleDto>) => r.body as RuleDto)
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
  rulesControllerDelete$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.RulesControllerDeletePath, 'delete');
    if (params) {


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
  rulesControllerDelete(params?: {

  }): Observable<void> {

    return this.rulesControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rulesControllerPatch
   */
  static readonly RulesControllerPatchPath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerPatch$Response(params: {
      body: Rule
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.RulesControllerPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{  }>;
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
      body: Rule
  }): Observable<{  }> {

    return this.rulesControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
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

  }): Observable<StrictHttpResponse<Array<RuleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.RulesControllerGetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RuleDto>>;
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

  }): Observable<Array<RuleDto>> {

    return this.rulesControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RuleDto>>) => r.body as Array<RuleDto>)
    );
  }

  /**
   * Path part for operation rulesControllerCreate
   */
  static readonly RulesControllerCreatePath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rulesControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerCreate$Response(params: {
      body: Array<string>
  }): Observable<StrictHttpResponse<RuleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.RulesControllerCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RuleDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rulesControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rulesControllerCreate(params: {
      body: Array<string>
  }): Observable<RuleDto> {

    return this.rulesControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<RuleDto>) => r.body as RuleDto)
    );
  }

}
