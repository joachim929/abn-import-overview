/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { CreateCategoryDto } from '../models/create-category-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation categoryControllerGetAll
   */
  static readonly CategoryControllerGetAllPath = '/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGetAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryApiService.CategoryControllerGetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGetAll(params?: {

  }): Observable<Array<CategoryDto>> {

    return this.categoryControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation categoryControllerPatch
   */
  static readonly CategoryControllerPatchPath = '/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerPatch$Response(params: {
      body: CategoryDto
  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryApiService.CategoryControllerPatchPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerPatch(params: {
      body: CategoryDto
  }): Observable<CategoryDto> {

    return this.categoryControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation categoryControllerGet
   */
  static readonly CategoryControllerGetPath = '/category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGet$Response(params?: {

  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryApiService.CategoryControllerGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGet(params?: {

  }): Observable<CategoryDto> {

    return this.categoryControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation categoryControllerDelete
   */
  static readonly CategoryControllerDeletePath = '/category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryApiService.CategoryControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `categoryControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerDelete(params: {
    id: number;

  }): Observable<{  }> {

    return this.categoryControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation categoryControllerCreate
   */
  static readonly CategoryControllerCreatePath = '/category/{parentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerCreate$Response(params: {
    parentId: string;
      body: CreateCategoryDto
  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryApiService.CategoryControllerCreatePath, 'post');
    if (params) {

      rb.path('parentId', params.parentId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerCreate(params: {
    parentId: string;
      body: CreateCategoryDto
  }): Observable<CategoryDto> {

    return this.categoryControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

}
