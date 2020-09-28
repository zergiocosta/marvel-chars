import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { ApiResponse } from '@app/models'
import { ApiService } from '@services/api/api.service'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = 'characters'

  constructor(
    private apiService: ApiService
  ) { }

  public getHeroes(): Observable<ApiResponse> {
    return this.apiService.list(this.baseUrl)
  }

  public getHeroById(id: number): Observable<ApiResponse> {
    return this.apiService.show(this.baseUrl, id)
  }
}
