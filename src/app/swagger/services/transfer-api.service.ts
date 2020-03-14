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
import { TransferMutationDto } from '../models/transfer-mutation-dto';

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
   * Path part for operation getTransfer
   */
  static readonly GetTransferPath = '/transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransfer$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TransferMutationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.GetTransferPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `getTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransfer(params?: {

  }): Observable<Array<TransferMutationDto>> {

    return this.getTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TransferMutationDto>>) => r.body as Array<TransferMutationDto>)
    );
  }

  /**
   * Path part for operation getTransfer_1
   */
  static readonly GetTransfer_1Path = '/transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransfer_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransfer_1$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Transfer>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.GetTransfer_1Path, 'get');
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
   * To access the full response (for headers, for example), `getTransfer_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransfer_1(params: {
    id: string;

  }): Observable<Transfer> {

    return this.getTransfer_1$Response(params).pipe(
      map((r: StrictHttpResponse<Transfer>) => r.body as Transfer)
    );
  }

  /**
   * Path part for operation deleteTransfer
   */
  static readonly DeleteTransferPath = '/transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransfer$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.DeleteTransferPath, 'delete');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `deleteTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransfer(params: {
    id: string;

  }): Observable<{  }> {

    return this.deleteTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation filteredTransfers
   */
  static readonly FilteredTransfersPath = '/transfer/filtered';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filteredTransfers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filteredTransfers$Response(params: {
      body: TransferListParams
  }): Observable<StrictHttpResponse<TransferListParams>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.FilteredTransfersPath, 'post');
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
   * To access the full response (for headers, for example), `filteredTransfers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filteredTransfers(params: {
      body: TransferListParams
  }): Observable<TransferListParams> {

    return this.filteredTransfers$Response(params).pipe(
      map((r: StrictHttpResponse<TransferListParams>) => r.body as TransferListParams)
    );
  }

  /**
   * Path part for operation postExcelTransfer
   */
  static readonly PostExcelTransferPath = '/transfer/upload/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postExcelTransfer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postExcelTransfer$Response(params: {
      body: Array<RawInvoiceJsonDto>
  }): Observable<StrictHttpResponse<TransferBatchImportDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.PostExcelTransferPath, 'post');
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
   * To access the full response (for headers, for example), `postExcelTransfer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postExcelTransfer(params: {
      body: Array<RawInvoiceJsonDto>
  }): Observable<TransferBatchImportDto> {

    return this.postExcelTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<TransferBatchImportDto>) => r.body as TransferBatchImportDto)
    );
  }

}
