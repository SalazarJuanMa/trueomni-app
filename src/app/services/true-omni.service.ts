import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SERVICE_ENDPOINTS } from 'src/constants/constants';
import { TrueOmniRequest } from '../interface/trueOmniRequest';
import { TrueOmniResponse } from '../interface/trueOmniResponse';
import { ApiService } from './api.service';
import { TrueOmniServiceModule } from './true-omni.service.module';


@Injectable({
  providedIn: TrueOmniServiceModule,
})
export class TrueOmniService extends ApiService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getDomainsPost(trueOmniRequest: TrueOmniRequest): Observable<TrueOmniResponse[]> {
    let headers = new HttpHeaders();
    return this.httpClient.get<TrueOmniResponse[]>(`${environment.FP_SERVER_PORT}${SERVICE_ENDPOINTS.GET_DOMAIN}`)
    .pipe(
      catchError(this.handleError<TrueOmniResponse[]>('getDomains', []))
    );

/*     return this.httpClient.post(
      `${environment.FP_SERVER_PORT}${SERVICE_ENDPOINTS.GET_DOMAIN}`,
      trueOmniRequest,
      this.getHttpOptions(headers)
    ); */
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
