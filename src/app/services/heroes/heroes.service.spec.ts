import { inject, TestBed } from '@angular/core/testing'

import { HeroesService } from '@services/heroes/heroes.service'
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

describe('HeroesService', () => {

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

  it('HeroesService should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy()
  }))

})
