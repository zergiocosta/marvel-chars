import { inject, TestBed } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import { of } from 'rxjs'

import { heroesMock } from './heroes.constant'
import { eventsMock } from './events.constant'

import { ApiResponse } from '@app/models'
import { ApiService } from './api.service'

let httpClientSpy: { get: jasmine.Spy }
let apiService: ApiService

describe('ApiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient,
        ApiService
      ]
    })

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    apiService = new ApiService(httpClientSpy as any)
  })

  it('ApiService should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy()
  }))

  it("list('characters') should return a http 200 with a list of characters", async () => {
    const expectedHeroes: ApiResponse = heroesMock

    httpClientSpy.get.and.returnValue(of(expectedHeroes))
    apiService.list('characters').subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected result'),
      fail
    )

    expect(httpClientSpy.get.calls.count()).toBe(1, 'single call')
  })

  it("show('characters', 1011334) should return the character with id 1011334", async () => {
    const expectedHeroes: ApiResponse = heroesMock

    httpClientSpy.get.and.returnValue(of(expectedHeroes))
    apiService.show('characters', 1011334).subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected result'),
      fail
    )

    expect(httpClientSpy.get.calls.count()).toBe(1, 'single call')
  })

  it("listChild('characters', 1011334, 'events') should return the events of the 1011334 character", async () => {
    const expectedEvents: ApiResponse = eventsMock

    httpClientSpy.get.and.returnValue(of(expectedEvents))
    apiService.listChild('characters', 1011334, 'events').subscribe(
      heroes => expect(heroes).toEqual(expectedEvents, 'expected result'),
      fail
    )

    expect(httpClientSpy.get.calls.count()).toBe(1, 'single call')
  })

})
