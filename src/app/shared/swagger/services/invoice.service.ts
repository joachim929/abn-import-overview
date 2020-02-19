/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateInvoiceDto } from '../models/create-invoice-dto';
import { InvoiceDto } from '../models/invoice-dto';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation invoiceControllerGet
   */
  static readonly InvoiceControllerGetPath = '/invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<InvoiceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InvoiceDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `invoiceControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerGet(params?: {

  }): Observable<Array<InvoiceDto>> {

    return this.invoiceControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceDto>>) => r.body as Array<InvoiceDto>)
    );
  }

  /**
   * Path part for operation invoiceControllerCreate
   */
  static readonly InvoiceControllerCreatePath = '/invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerCreate$Response(params: {
      body: CreateInvoiceDto
  }): Observable<StrictHttpResponse<InvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `invoiceControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerCreate(params: {
      body: CreateInvoiceDto
  }): Observable<InvoiceDto> {

    return this.invoiceControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceDto>) => r.body as InvoiceDto)
    );
  }

  /**
   * Path part for operation invoiceControllerPatch
   */
  static readonly InvoiceControllerPatchPath = '/invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerPatch$Response(params: {
      body: CreateInvoiceDto
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `invoiceControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerPatch(params: {
      body: CreateInvoiceDto
  }): Observable<{  }> {

    return this.invoiceControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation invoiceControllerDelete
   */
  static readonly InvoiceControllerDeletePath = '/invoice/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerDelete$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerDeletePath, 'delete');
    if (params) {


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
   * To access the full response (for headers, for example), `invoiceControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerDelete(params?: {

  }): Observable<{  }> {

    return this.invoiceControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation invoiceControllerCreateMulti
   */
  static readonly InvoiceControllerCreateMultiPath = '/invoice/multi';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerCreateMulti()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerCreateMulti$Response(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<StrictHttpResponse<Array<InvoiceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerCreateMultiPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InvoiceDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `invoiceControllerCreateMulti$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceControllerCreateMulti(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<Array<InvoiceDto>> {

    return this.invoiceControllerCreateMulti$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceDto>>) => r.body as Array<InvoiceDto>)
    );
  }

  /**
   * Path part for operation invoiceControllerImport
   */
  static readonly InvoiceControllerImportPath = '/invoice/upload/{type}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceControllerImport()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerImport$Response(params: {
    type: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.InvoiceControllerImportPath, 'post');
    if (params) {

      rb.path('type', params.type);

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
   * To access the full response (for headers, for example), `invoiceControllerImport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invoiceControllerImport(params: {
    type: string;

  }): Observable<string> {

    return this.invoiceControllerImport$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
