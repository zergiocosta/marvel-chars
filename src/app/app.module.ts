import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { ComponentsModule } from './components/components.module'

import { LoaderInterceptor } from '@interceptors/loader.interceptor'
import { LoaderService } from '@services/loader/loader.service'
import { LoaderComponent } from './components/loader/loader.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from "@angular/material/card"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ComponentsModule,

    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    LoaderService,
    [ { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true } ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
