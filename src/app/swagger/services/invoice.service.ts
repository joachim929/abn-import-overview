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
   * Path part for operation getInvoicesForUser
   */
  static readonly GetInvoicesForUserPath = '/invoice/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoicesForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesForUser$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.GetInvoicesForUserPath, 'get');
    if (params) {

      rb.path('userId', params.userId);

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
   * To access the full response (for headers, for example), `getInvoicesForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesForUser(params: {
    userId: number;

  }): Observable<void> {

    return this.getInvoicesForUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postInvoice
   */
  static readonly PostInvoicePath = '/invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoice$Response(params: {
      body: CreateInvoiceDto
  }): Observable<StrictHttpResponse<InvoiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.PostInvoicePath, 'post');
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
   * To access the full response (for headers, for example), `postInvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoice(params: {
      body: CreateInvoiceDto
  }): Observable<InvoiceDto> {

    return this.postInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceDto>) => r.body as InvoiceDto)
    );
  }

  /**
   * Path part for operation patchInvoice
   */
  static readonly PatchInvoicePath = '/invoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchInvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchInvoice$Response(params: {
      body: CreateInvoiceDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.PatchInvoicePath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `patchInvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchInvoice(params: {
      body: CreateInvoiceDto
  }): Observable<void> {

    return this.patchInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteInvoice
   */
  static readonly DeleteInvoicePath = '/invoice/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInvoice()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInvoice$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.DeleteInvoicePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteInvoice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInvoice(params?: {

  }): Observable<void> {

    return this.deleteInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postInvoiceMulti
   */
  static readonly PostInvoiceMultiPath = '/invoice/multi';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInvoiceMulti()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMulti$Response(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<StrictHttpResponse<Array<InvoiceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.PostInvoiceMultiPath, 'post');
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
   * To access the full response (for headers, for example), `postInvoiceMulti$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMulti(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<Array<InvoiceDto>> {

    return this.postInvoiceMulti$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceDto>>) => r.body as Array<InvoiceDto>)
    );
  }

  /**
   * Path part for operation postInvoiceMultiText
   */
  static readonly PostInvoiceMultiTextPath = '/invoice/upload/text';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInvoiceMultiText()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMultiText$Response(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.PostInvoiceMultiTextPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `postInvoiceMultiText$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMultiText(params: {
      body: Array<CreateInvoiceDto>
  }): Observable<void> {

    return this.postInvoiceMultiText$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postInvoiceMultiExcel
   */
  static readonly PostInvoiceMultiExcelPath = '/invoice/upload/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postInvoiceMultiExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMultiExcel$Response(params: {
      body: Array<string>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceService.PostInvoiceMultiExcelPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `postInvoiceMultiExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postInvoiceMultiExcel(params: {
      body: Array<string>
  }): Observable<void> {

    return this.postInvoiceMultiExcel$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
