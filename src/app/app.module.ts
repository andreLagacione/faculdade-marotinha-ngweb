import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ToasterModule } from './toaster/toaster.module';
import { PaginationModule } from './pagination/pagination.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ConfirmModalModule } from './confirm-modal/confirm-modal.module';
import { SidebarFilterModule } from './sidebar-filter/sidebar-filter.module';

// routes
import { AppRoutingModule } from './app-routing.module';

// services
import { ControlElementsService } from './shared/services/control-elements.service';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './layout/top/top.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    ToasterModule.forRoot(),
    PaginationModule.forRoot(),
    ConfirmModalModule.forRoot(),
    SidebarFilterModule.forRoot(),
  ],
  providers: [
    Title,
    ControlElementsService,
    {
      provide: localePt,
      useValue: 'pt-BR'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
