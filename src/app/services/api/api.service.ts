import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { retry } from 'rxjs/operators'

import * as crypto from 'crypto-js'

import { environment } from '@env/environment'
import { HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private root: string = environment.apiUrl
  private apiKey: string = environment.apiKey
  private privateKey: string = environment.privateKey

  constructor(
    public httpClient: HttpClient
  ) { }

  public list = (url: string, params?: any): Observable<any> => {
    const requestParams: HttpParams = this.requestParams(params)
    const requestHeaders: HttpHeaders = this.requestHeaders()

    return this.httpClient
      .get(`${this.root}/${url}`, { params: requestParams, headers: requestHeaders } )
      .pipe(retry(2))
  }

  public show = (url: string, id: number, params?: any): Observable<any> => {
    const requestHeaders: HttpHeaders = this.requestHeaders()
    const requestParams: HttpParams = this.requestParams(params)

    return this.httpClient
      .get(`${this.root}/${url}/${id}`, { params: requestParams, headers: requestHeaders } )
      .pipe(retry(2))
  }

  public listChild = (url: string, id: number, resource: string, params?: any): Observable<any> => {
    const requestHeaders: HttpHeaders = this.requestHeaders()
    const requestParams: HttpParams = this.requestParams(params)

    return this.httpClient
      .get(`${this.root}/${url}/${id}/${resource}`, { params: requestParams, headers: requestHeaders } )
      .pipe(retry(2))
  }

  private requestHeaders = (): HttpHeaders => {
    let headers: HttpHeaders = new HttpHeaders()
    headers.set('Content-Type', 'application/json')

    return headers
  }

  private requestParams = (queryParams: any): HttpParams => {
    const timestamp = Date.now()
    const hash = this.makeHash(timestamp)

    const requestParams: HttpParams = {
      ts: timestamp,
      apikey: this.apiKey,
      hash: hash,
      ...queryParams
    }

    return requestParams
  }

  private makeHash(timestamp: number): string {
    const msg = timestamp+this.privateKey+this.apiKey
    return crypto.MD5(msg).toString()
  }
}
