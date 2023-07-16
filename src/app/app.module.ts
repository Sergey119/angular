import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TemplatePageTitleStrategy } from './app.component';
import { NotifyComponent } from './notify/notify.component';
import { SearchComponent } from './search/search.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TableDynamicObservableDataExample } from './schedule/schedule.component';
import {SomeDataService} from './notlist/notlist.service';

import {Routes, RouterModule, TitleStrategy} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { DropdownModule } from "primeng/dropdown";
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartDateButtonComponent } from './start-date-button/start-date-button.component';
import { EndDateButtonComponent } from './end-date-button/end-date-button.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { MoveButtonComponent } from './move-button/move-button.component';
import { ToWorkButtonComponent } from './to-work-button/to-work-button.component';
import { LogComponent } from './log/log.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: ProfileComponent, data: {title: 'Страница профиля'}},
  { path: 'settings', component: SettingsComponent, data: {title: 'Страница настроек'}},
  { path: '**', component: NotFoundComponent, data: {title: 'Error page'}}
];

@Injectable({ providedIn: 'root' })
export class CustomTitleResolver {
  resolve() {
    return Promise.resolve('Custom About Me');
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    SearchComponent,
    SidemenuComponent,
    ProfileComponent,
    SettingsComponent,
    NotFoundComponent,
    NavbarComponent,
    StartDateButtonComponent,
    EndDateButtonComponent,
    MoveButtonComponent,
    ToWorkButtonComponent,
    ActionButtonComponent,
    LogComponent,
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
            ButtonModule, RippleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TableDynamicObservableDataExample,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ButtonModule,
    ReactiveFormsModule,
    TableDynamicObservableDataExample
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    },
    SomeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
