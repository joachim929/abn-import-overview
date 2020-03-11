/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { InvoiceDto } from '../models/invoice-dto';
import { RawInvoiceJsonDto } from '../models/raw-invoice-json-dto';
import { Transfer } from '../models/transfer';
import { TransferBatchImportDto } from '../models/transfer-batch-import-dto';

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

  }): Observable<StrictHttpResponse<Array<Transfer>>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.GetTransferPath, 'get');
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
   * To access the full response (for headers, for example), `getTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransfer(params?: {

  }): Observable<Array<Transfer>> {

    return this.getTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Transfer>>) => r.body as Array<Transfer>)
    );
  }

  /**
   * Path part for operation patchTransfer
   */
  static readonly PatchTransferPath = '/transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  patchTransfer$Response(params?: {

  }): Observable<StrictHttpResponse<InvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.PatchTransferPath, 'patch');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  patchTransfer(params?: {

  }): Observable<InvoiceDto> {

    return this.patchTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceDto>) => r.body as InvoiceDto)
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
    id: number;

  }): Observable<StrictHttpResponse<string>> {

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
        return r as StrictHttpResponse<string>;
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
    id: number;

  }): Observable<string> {

    return this.deleteTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
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
   * This method doesn't expect any request body.
   */
  filteredTransfers$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.FilteredTransfersPath, 'post');
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
   * To access the full response (for headers, for example), `filteredTransfers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filteredTransfers(params?: {

  }): Observable<void> {

    return this.filteredTransfers$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation splitTransfer
   */
  static readonly SplitTransferPath = '/transfer/split';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `splitTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  splitTransfer$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransferApiService.SplitTransferPath, 'post');
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
   * To access the full response (for headers, for example), `splitTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  splitTransfer(params?: {

  }): Observable<void> {

    return this.splitTransfer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
