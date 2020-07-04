/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { RawInvoiceJsonDto } from '../models/raw-invoice-json-dto';
import { Transfer } from '../models/transfer';
import { TransferBatchImportDto } from '../models/transfer-batch-import-dto';
import { TransferListParams } from '../models/transfer-list-params';
import { TransferMutation } from '../models/transfer-mutation';

@Injectable({
  providedIn: 'root',
})
export class TransferApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation transferControllerGet
   */
  static readonly TransferControllerGetPath = '/transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferControllerGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Transfer>>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.TransferControllerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Transfer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `transferControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferControllerGet(params?: {

  }): Observable<Array<Transfer>> {

    return this.transferControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Transfer>>) => r.body as Array<Transfer>)
    );
  }

  /**
   * Path part for operation transferControllerGetTransfer
   */
  static readonly TransferControllerGetTransferPath = '/transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferControllerGetTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferControllerGetTransfer$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<TransferMutation>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.TransferControllerGetTransferPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferMutation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `transferControllerGetTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transferControllerGetTransfer(params: {
    id: string;

  }): Observable<TransferMutation> {

    return this.transferControllerGetTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<TransferMutation>) => r.body as TransferMutation)
    );
  }

  /**
   * Path part for operation transferControllerGetFilteredTransfers
   */
  static readonly TransferControllerGetFilteredTransfersPath = '/transfer/filtered';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferControllerGetFilteredTransfers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferControllerGetFilteredTransfers$Response(params: {
      body: TransferListParams
  }): Observable<StrictHttpResponse<TransferListParams>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.TransferControllerGetFilteredTransfersPath, 'post');
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
   * To access the full response (for headers, for example), `transferControllerGetFilteredTransfers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferControllerGetFilteredTransfers(params: {
      body: TransferListParams
  }): Observable<TransferListParams> {

    return this.transferControllerGetFilteredTransfers$Response(params).pipe(
      map((r: StrictHttpResponse<TransferListParams>) => r.body as TransferListParams)
    );
  }

  /**
   * Path part for operation transferControllerPostExcelImport
   */
  static readonly TransferControllerPostExcelImportPath = '/transfer/upload/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transferControllerPostExcelImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferControllerPostExcelImport$Response(params: {
      body: Array<RawInvoiceJsonDto>
  }): Observable<StrictHttpResponse<TransferBatchImportDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.TransferControllerPostExcelImportPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransferBatchImportDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `transferControllerPostExcelImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  transferControllerPostExcelImport(params: {
      body: Array<RawInvoiceJsonDto>
  }): Observable<TransferBatchImportDto> {

    return this.transferControllerPostExcelImport$Response(params).pipe(
      map((r: StrictHttpResponse<TransferBatchImportDto>) => r.body as TransferBatchImportDto)
    );
  }

}
