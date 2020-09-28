import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ApiService } from '@services/api/api.service'
import { EventsService } from '@services/events/events.service'
import { HeroesService } from '@services/heroes/heroes.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    EventsService,
    HeroesService
  ]
})
export class ServicesModule { }
