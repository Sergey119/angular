import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyComponent } from './notify/notify.component';
import { SearchComponent } from './search/search.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TableDynamicObservableDataExample } from './schedule/schedule.component';
import {SomeDataService} from './notlist/notlist.service';

import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component'

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: NotFoundComponent }
];

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
  ],
  imports: [
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
    TableDynamicObservableDataExample
  ],
  exports: [
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
    SomeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
