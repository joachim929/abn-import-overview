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
   * Path part for operation transferConditionControllerGetAll
   */
  static readonly TransferConditionControllerGetAllPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferConditionControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerGetAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TransferConditionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.TransferConditionControllerGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `transferConditionControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerGetAll(params?: {

  }): Observable<Array<TransferConditionDto>> {

    return this.transferConditionControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferConditionDto>>) => r.body as Array<TransferConditionDto>)
    );
  }

  /**
   * Path part for operation transferConditionControllerPost
   */
  static readonly TransferConditionControllerPostPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferConditionControllerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferConditionControllerPost$Response(params: {
      body: CreateTransferConditionDto
  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.TransferConditionControllerPostPath, 'post');
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
   * To access the full response (for headers, for example), `transferConditionControllerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferConditionControllerPost(params: {
      body: CreateTransferConditionDto
  }): Observable<TransferConditionDto> {

    return this.transferConditionControllerPost$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation transferConditionControllerPatch
   */
  static readonly TransferConditionControllerPatchPath = '/rules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferConditionControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferConditionControllerPatch$Response(params: {
      body: TransferConditionDto
  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.TransferConditionControllerPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `transferConditionControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferConditionControllerPatch(params: {
      body: TransferConditionDto
  }): Observable<TransferConditionDto> {

    return this.transferConditionControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation transferConditionControllerGet
   */
  static readonly TransferConditionControllerGetPath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferConditionControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerGet$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<TransferConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.TransferConditionControllerGetPath, 'get');
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
   * To access the full response (for headers, for example), `transferConditionControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerGet(params: {
    id: string;

  }): Observable<TransferConditionDto> {

    return this.transferConditionControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<TransferConditionDto>) => r.body as TransferConditionDto)
    );
  }

  /**
   * Path part for operation transferConditionControllerDelete
   */
  static readonly TransferConditionControllerDeletePath = '/rules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferConditionControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerDelete$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RulesApiService.TransferConditionControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `transferConditionControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferConditionControllerDelete(params: {
    id: string;

  }): Observable<void> {

    return this.transferConditionControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
