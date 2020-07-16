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
   * Path part for operation transferMutationControllerGetTransferMutationsByCategoryId
   */
  static readonly TransferMutationControllerGetTransferMutationsByCategoryIdPath = '/transfer-mutation/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerGetTransferMutationsByCategoryId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerGetTransferMutationsByCategoryId$Response(params: {
      body: TransferListParams
  }): Observable<StrictHttpResponse<TransferListParams>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerGetTransferMutationsByCategoryIdPath, 'post');
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
   * To access the full response (for headers, for example), `transferMutationControllerGetTransferMutationsByCategoryId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerGetTransferMutationsByCategoryId(params: {
      body: TransferListParams
  }): Observable<TransferListParams> {

    return this.transferMutationControllerGetTransferMutationsByCategoryId$Response(params).pipe(
      map((r: StrictHttpResponse<TransferListParams>) => r.body as TransferListParams)
    );
  }

  /**
   * Path part for operation transferMutationControllerGetTransferMutationHistory
   */
  static readonly TransferMutationControllerGetTransferMutationHistoryPath = '/transfer-mutation/history/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerGetTransferMutationHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferMutationControllerGetTransferMutationHistory$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Transfer>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerGetTransferMutationHistoryPath, 'get');
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
   * To access the full response (for headers, for example), `transferMutationControllerGetTransferMutationHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferMutationControllerGetTransferMutationHistory(params: {
    id: string;

  }): Observable<Transfer> {

    return this.transferMutationControllerGetTransferMutationHistory$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

  /**
   * Path part for operation transferMutationControllerUndoTransferMutationPatch
   */
  static readonly TransferMutationControllerUndoTransferMutationPatchPath = '/transfer-mutation/undo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerUndoTransferMutationPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerUndoTransferMutationPatch$Response(params: {
      body: TransferMutationDto
  }): Observable<StrictHttpResponse<TransferMutationDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerUndoTransferMutationPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `transferMutationControllerUndoTransferMutationPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerUndoTransferMutationPatch(params: {
      body: TransferMutationDto
  }): Observable<TransferMutationDto> {

    return this.transferMutationControllerUndoTransferMutationPatch$Response(params).pipe(
      map((r: StrictHttpResponse<TransferMutationDto>) => r.body as TransferMutationDto)
    );
  }

  /**
   * Path part for operation transferMutationControllerSplitTransferMutation
   */
  static readonly TransferMutationControllerSplitTransferMutationPath = '/transfer-mutation/split';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerSplitTransferMutation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerSplitTransferMutation$Response(params: {
      body: SplitTransferMutationDto
  }): Observable<StrictHttpResponse<Array<TransferMutationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerSplitTransferMutationPath, 'post');
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
   * To access the full response (for headers, for example), `transferMutationControllerSplitTransferMutation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerSplitTransferMutation(params: {
      body: SplitTransferMutationDto
  }): Observable<Array<TransferMutationDto>> {

    return this.transferMutationControllerSplitTransferMutation$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferMutationDto>>) => r.body as Array<TransferMutationDto>)
    );
  }

  /**
   * Path part for operation transferMutationControllerDelete
   */
  static readonly TransferMutationControllerDeletePath = '/transfer-mutation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferMutationControllerDelete$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `transferMutationControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferMutationControllerDelete(params: {
    id: string;

  }): Observable<void> {

    return this.transferMutationControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation transferMutationControllerPatchTransferMutation
   */
  static readonly TransferMutationControllerPatchTransferMutationPath = '/transfer-mutation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferMutationControllerPatchTransferMutation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerPatchTransferMutation$Response(params: {
      body: TransferMutationDto
  }): Observable<StrictHttpResponse<TransferMutationDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferMutationApiService.TransferMutationControllerPatchTransferMutationPath, 'patch');
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
   * To access the full response (for headers, for example), `transferMutationControllerPatchTransferMutation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferMutationControllerPatchTransferMutation(params: {
      body: TransferMutationDto
  }): Observable<TransferMutationDto> {

    return this.transferMutationControllerPatchTransferMutation$Response(params).pipe(
      map((r: StrictHttpResponse<TransferMutationDto>) => r.body as TransferMutationDto)
    );
  }

}
