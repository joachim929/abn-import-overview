/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EnumDto } from '../models/enum-dto';

@Injectable({
  providedIn: 'root',
})
export class AppApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation appControllerGetEnums
   */
  static readonly AppControllerGetEnumsPath = '/enums';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appControllerGetEnums()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetEnums$Response(params?: {

  }): Observable<StrictHttpResponse<EnumDto>> {

    const rb = new RequestBuilder(this.rootUrl, AppApiService.AppControllerGetEnumsPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EnumDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appControllerGetEnums$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetEnums(params?: {

  }): Observable<EnumDto> {

    return this.appControllerGetEnums$Response(params).pipe(
      map((r: StrictHttpResponse<EnumDto>) => r.body as EnumDto)
    );
  }

}
