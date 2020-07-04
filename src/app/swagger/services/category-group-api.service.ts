/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CategoryGroupDto } from '../models/category-group-dto';
import { CreateCategoryGroupDto } from '../models/create-category-group-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryGroupApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation categoryGroupControllerGetAllWithCategories
   */
  static readonly CategoryGroupControllerGetAllWithCategoriesPath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerGetAllWithCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGetAllWithCategories$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CategoryGroupDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.CategoryGroupControllerGetAllWithCategoriesPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryGroupDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryGroupControllerGetAllWithCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGetAllWithCategories(params?: {

  }): Observable<Array<CategoryGroupDto>> {

    return this.categoryGroupControllerGetAllWithCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryGroupDto>>) => r.body as Array<CategoryGroupDto>)
    );
  }

  /**
   * Path part for operation categoryGroupControllerCreate
   */
  static readonly CategoryGroupControllerCreatePath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerCreate$Response(params: {
      body: CreateCategoryGroupDto
  }): Observable<StrictHttpResponse<CategoryGroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.CategoryGroupControllerCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryGroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryGroupControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerCreate(params: {
      body: CreateCategoryGroupDto
  }): Observable<CategoryGroupDto> {

    return this.categoryGroupControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryGroupDto>) => r.body as CategoryGroupDto)
    );
  }

  /**
   * Path part for operation categoryGroupControllerPatchMultiple
   */
  static readonly CategoryGroupControllerPatchMultiplePath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerPatchMultiple()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerPatchMultiple$Response(params: {
      body: Array<CategoryGroupDto>
  }): Observable<StrictHttpResponse<Array<CategoryGroupDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.CategoryGroupControllerPatchMultiplePath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryGroupDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryGroupControllerPatchMultiple$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerPatchMultiple(params: {
      body: Array<CategoryGroupDto>
  }): Observable<Array<CategoryGroupDto>> {

    return this.categoryGroupControllerPatchMultiple$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryGroupDto>>) => r.body as Array<CategoryGroupDto>)
    );
  }

  /**
   * Path part for operation categoryGroupControllerDelete
   */
  static readonly CategoryGroupControllerDeletePath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerDelete$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.CategoryGroupControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `categoryGroupControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerDelete(params: {
    id: string;

  }): Observable<void> {

    return this.categoryGroupControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
