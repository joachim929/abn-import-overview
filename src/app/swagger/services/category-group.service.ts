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
export class CategoryGroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation categoryGroupControllerGetAll
   */
  static readonly CategoryGroupControllerGetAllPath = '/category-group/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGetAll$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerGetAllPath, 'get');
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
   * To access the full response (for headers, for example), `categoryGroupControllerGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGetAll(params?: {

  }): Observable<{  }> {

    return this.categoryGroupControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation categoryGroupControllerGet
   */
  static readonly CategoryGroupControllerGetPath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGet$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerGetPath, 'get');
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
   * To access the full response (for headers, for example), `categoryGroupControllerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGet(params?: {

  }): Observable<{  }> {

    return this.categoryGroupControllerGet$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
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
  categoryGroupControllerDelete$Response(params?: {

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `categoryGroupControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerDelete(params?: {

  }): Observable<{  }> {

    return this.categoryGroupControllerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation categoryGroupControllerPatch
   */
  static readonly CategoryGroupControllerPatchPath = '/category-group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGroupControllerPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerPatch$Response(params: {
      body: CategoryGroup
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `categoryGroupControllerPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerPatch(params: {
      body: CategoryGroup
  }): Observable<{  }> {

    return this.categoryGroupControllerPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
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

  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerGetAllWithCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `categoryGroupControllerGetAllWithCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGroupControllerGetAllWithCategories(params?: {

  }): Observable<{  }> {

    return this.categoryGroupControllerGetAllWithCategories$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
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
      body: CategoryGroup
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryGroupService.CategoryGroupControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `categoryGroupControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryGroupControllerCreate(params: {
      body: CategoryGroup
  }): Observable<{  }> {

    return this.categoryGroupControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

}
