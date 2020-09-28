import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { ApiResponse } from '@app/models'
import { ApiService } from '@services/api/api.service'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private baseUrl: string = 'characters'
  private childResource: string = 'events'

  constructor(
    private apiService: ApiService
  ) { }

  public getEventByHeroId(id: number): Observable<ApiResponse> {
    return this.apiService.listChild(this.baseUrl, id, this.childResource)
  }
}
