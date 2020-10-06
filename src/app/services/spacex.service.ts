import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl: string = 'https://api.spaceXdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAllSpaceXDataInitial(limit): Observable<any> {
    let params = new HttpParams().set('limit', limit);
    return this.http.get(this.baseUrl, { params: params });
  }

  getAllSpaceXData(limit, launch_success, land_success, launch_year): Observable<any> {
    let params = new HttpParams().set('limit', limit).set('launch_success', launch_success).set('land_success', land_success).set('launch_year', launch_year);
    return this.http.get(this.baseUrl, { params: params });
  }
}
