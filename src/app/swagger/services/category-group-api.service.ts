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
   * Path part for operation getAllCategoryGroupsWithCategories
   */
  static readonly GetAllCategoryGroupsWithCategoriesPath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategoryGroupsWithCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoryGroupsWithCategories$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CategoryGroupDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.GetAllCategoryGroupsWithCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `getAllCategoryGroupsWithCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoryGroupsWithCategories(params?: {

  }): Observable<Array<CategoryGroupDto>> {

    return this.getAllCategoryGroupsWithCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryGroupDto>>) => r.body as Array<CategoryGroupDto>)
    );
  }

  /**
   * Path part for operation createCategoryGroup
   */
  static readonly CreateCategoryGroupPath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategoryGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategoryGroup$Response(params: {
      body: CreateCategoryGroupDto
  }): Observable<StrictHttpResponse<CategoryGroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.CreateCategoryGroupPath, 'post');
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
   * To access the full response (for headers, for example), `createCategoryGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategoryGroup(params: {
      body: CreateCategoryGroupDto
  }): Observable<CategoryGroupDto> {

    return this.createCategoryGroup$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryGroupDto>) => r.body as CategoryGroupDto)
    );
  }

  /**
   * Path part for operation patchMultiple
   */
  static readonly PatchMultiplePath = '/category-group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchMultiple()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchMultiple$Response(params: {
      body: Array<CategoryGroupDto>
  }): Observable<StrictHttpResponse<Array<CategoryGroupDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.PatchMultiplePath, 'patch');
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
   * To access the full response (for headers, for example), `patchMultiple$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchMultiple(params: {
      body: Array<CategoryGroupDto>
  }): Observable<Array<CategoryGroupDto>> {

    return this.patchMultiple$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryGroupDto>>) => r.body as Array<CategoryGroupDto>)
    );
  }

  /**
   * Path part for operation deleteCategoryGroup
   */
  static readonly DeleteCategoryGroupPath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategoryGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryGroup$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.DeleteCategoryGroupPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteCategoryGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryGroup(params?: {

  }): Observable<{  }> {

    return this.deleteCategoryGroup$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

}
