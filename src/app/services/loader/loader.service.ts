import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject, Observable } from 'rxjs'
import { share } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class LoaderService {

  private visible$: Subject<boolean> = new BehaviorSubject<boolean>(false)

  public show = (): void => {
    this.visible$.next(true)
  }

  public hide = (): void => {
    this.visible$.next(false)
  }

  public isVisible = (): Observable<boolean> => {
    return this.visible$.asObservable().pipe(share())
  }
}
