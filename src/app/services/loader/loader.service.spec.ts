import { TestBed } from '@angular/core/testing'

import { LoaderService } from './loader.service'

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('LoaderService should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService)
    expect(service).toBeTruthy()
  })
})
