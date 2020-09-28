import { inject, TestBed } from '@angular/core/testing'

import { EventsService } from '@services/events/events.service'
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

describe('EventsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient
      ]
    })
  })

  it('EventsService should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy()
  }))

})
