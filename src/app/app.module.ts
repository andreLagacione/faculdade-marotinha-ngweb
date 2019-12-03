import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

// modules
import { ToastrModule } from 'ngx-toastr';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    Title,
    {
      provide: localePt,
      useValue: 'pt-BR'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
