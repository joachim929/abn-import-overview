/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CategoryGroup } from '../models/category-group';

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
   * Path part for operation getAllCategoryGroups
   */
  static readonly GetAllCategoryGroupsPath = '/category-group/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategoryGroups()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoryGroups$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.GetAllCategoryGroupsPath, 'get');
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
   * To access the full response (for headers, for example), `getAllCategoryGroups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoryGroups(params?: {

  }): Observable<{  }> {

    return this.getAllCategoryGroups$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getCategoryGroupById
   */
  static readonly GetCategoryGroupByIdPath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryGroupById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryGroupById$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.GetCategoryGroupByIdPath, 'get');
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
   * To access the full response (for headers, for example), `getCategoryGroupById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryGroupById(params?: {

  }): Observable<{  }> {

    return this.getCategoryGroupById$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
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

  /**
   * Path part for operation patchCategoryGroup
   */
  static readonly PatchCategoryGroupPath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchCategoryGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchCategoryGroup$Response(params: {
      body: CategoryGroup
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.PatchCategoryGroupPath, 'patch');
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
   * To access the full response (for headers, for example), `patchCategoryGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchCategoryGroup(params: {
      body: CategoryGroup
  }): Observable<{  }> {

    return this.patchCategoryGroup$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
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

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupApiService.GetAllCategoryGroupsWithCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `getAllCategoryGroupsWithCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoryGroupsWithCategories(params?: {

  }): Observable<{  }> {

    return this.getAllCategoryGroupsWithCategories$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
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
      body: CategoryGroup
  }): Observable<StrictHttpResponse<{  }>> {

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
        return r as StrictHttpResponse<{  }>;
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
      body: CategoryGroup
  }): Observable<{  }> {

    return this.createCategoryGroup$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

}
