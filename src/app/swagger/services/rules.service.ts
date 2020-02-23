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
   * Path part for operation getRuleById
   */
  static readonly GetRuleByIdPath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRuleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRuleById$Response(params?: {

  }): Observable<StrictHttpResponse<RuleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.GetRuleByIdPath, 'get');
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
   * To access the full response (for headers, for example), `getRuleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRuleById(params?: {

  }): Observable<RuleDto> {

    return this.getRuleById$Response(params).pipe(
      map((r: StrictHttpResponse<RuleDto>) => r.body as RuleDto)
    );
  }

  /**
   * Path part for operation deleteRule
   */
  static readonly DeleteRulePath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRule()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRule$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.DeleteRulePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteRule$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRule(params?: {

  }): Observable<void> {

    return this.deleteRule$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchRule
   */
  static readonly PatchRulePath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchRule()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchRule$Response(params: {
      body: Rule
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.PatchRulePath, 'patch');
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
   * To access the full response (for headers, for example), `patchRule$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchRule(params: {
      body: Rule
  }): Observable<{  }> {

    return this.patchRule$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getAllRules
   */
  static readonly GetAllRulesPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRules()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRules$Response(params?: {

  }): Observable<StrictHttpResponse<Array<RuleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.GetAllRulesPath, 'get');
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
   * To access the full response (for headers, for example), `getAllRules$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRules(params?: {

  }): Observable<Array<RuleDto>> {

    return this.getAllRules$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RuleDto>>) => r.body as Array<RuleDto>)
    );
  }

  /**
   * Path part for operation createRule
   */
  static readonly CreateRulePath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRule()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRule$Response(params: {
      body: Array<string>
  }): Observable<StrictHttpResponse<RuleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesService.CreateRulePath, 'post');
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
   * To access the full response (for headers, for example), `createRule$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRule(params: {
      body: Array<string>
  }): Observable<RuleDto> {

    return this.createRule$Response(params).pipe(
      map((r: StrictHttpResponse<RuleDto>) => r.body as RuleDto)
    );
  }

}
