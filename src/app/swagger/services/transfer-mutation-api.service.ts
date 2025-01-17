/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SplitTransferMutationDto } from '../models/split-transfer-mutation-dto';
import { Transfer } from '../models/transfer';
import { TransferListParams } from '../models/transfer-list-params';
import { TransferMutationDto } from '../models/transfer-mutation-dto';

@Injectable({
  providedIn: 'root',
})
export class TransferMutationApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getByCategoryId
   */
  static readonly GetByCategoryIdPath = '/transfer-mutation/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByCategoryId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getByCategoryId$Response(params: {
      body: TransferListParams
  }): Observable<StrictHttpResponse<TransferListParams>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.GetByCategoryIdPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferListParams>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getByCategoryId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getByCategoryId(params: {
      body: TransferListParams
  }): Observable<TransferListParams> {

    return this.getByCategoryId$Response(params).pipe(
      map((r: StrictHttpResponse<TransferListParams>) => r.body as TransferListParams)
    );
  }

  /**
   * Path part for operation getTransferMutationHistory
   */
  static readonly GetTransferMutationHistoryPath = '/transfer-mutation/history/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransferMutationHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferMutationHistory$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<Transfer>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.GetTransferMutationHistoryPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Transfer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTransferMutationHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransferMutationHistory(params: {
    id: number;

  }): Observable<Transfer> {

    return this.getTransferMutationHistory$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

  /**
   * Path part for operation undoTransferMutationPatch
   */
  static readonly UndoTransferMutationPatchPath = '/transfer-mutation/undo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `undoTransferMutationPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  undoTransferMutationPatch$Response(params: {
      body: TransferMutationDto
  }): Observable<StrictHttpResponse<TransferMutationDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.UndoTransferMutationPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferMutationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `undoTransferMutationPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  undoTransferMutationPatch(params: {
      body: TransferMutationDto
  }): Observable<TransferMutationDto> {

    return this.undoTransferMutationPatch$Response(params).pipe(
      map((r: StrictHttpResponse<TransferMutationDto>) => r.body as TransferMutationDto)
    );
  }

  /**
   * Path part for operation splitTransferMutation
   */
  static readonly SplitTransferMutationPath = '/transfer-mutation/split';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `splitTransferMutation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  splitTransferMutation$Response(params: {
      body: SplitTransferMutationDto
  }): Observable<StrictHttpResponse<Array<TransferMutationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.SplitTransferMutationPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TransferMutationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `splitTransferMutation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  splitTransferMutation(params: {
      body: SplitTransferMutationDto
  }): Observable<Array<TransferMutationDto>> {

    return this.splitTransferMutation$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferMutationDto>>) => r.body as Array<TransferMutationDto>)
    );
  }

  /**
   * Path part for operation deleteTransferMutation
   */
  static readonly DeleteTransferMutationPath = '/transfer-mutation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTransferMutation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransferMutation$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.DeleteTransferMutationPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteTransferMutation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransferMutation(params: {
    id: number;

  }): Observable<void> {

    return this.deleteTransferMutation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchTransferMutation
   */
  static readonly PatchTransferMutationPath = '/transfer-mutation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchTransferMutation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchTransferMutation$Response(params: {
      body: TransferMutationDto
  }): Observable<StrictHttpResponse<TransferMutationDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.PatchTransferMutationPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferMutationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchTransferMutation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchTransferMutation(params: {
      body: TransferMutationDto
  }): Observable<TransferMutationDto> {

    return this.patchTransferMutation$Response(params).pipe(
      map((r: StrictHttpResponse<TransferMutationDto>) => r.body as TransferMutationDto)
    );
  }

}
