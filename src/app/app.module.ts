import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TemplatePageTitleStrategy } from './app.component';
import { NotifyComponent } from './notify/notify.component';
import { SearchComponent } from './search/search.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

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
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ButtonComponent } from './button/button.component';
import { ToWorkButtonComponent } from './to-work-button/to-work-button.component';
import { LogComponent } from './log/log.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { ViewComponent } from './view/view.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { TableImitationComponent } from './table-imitation/table-imitation.component';
import { MyService } from './service.service';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { TableComponent } from "./table/table.component";
import { PageComponent } from './page/page.component';
import { TitleComponent } from './title/title.component';
import { TuneComponent } from './tune/tune.component';
import { ScheduleComponent } from './schedule/schedule.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: ScheduleComponent, data: {title: 'Страница графика работ'}},
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
        SettingsComponent,
        NotFoundComponent,
        NavbarComponent,
        ButtonComponent,
        ToWorkButtonComponent,
        ActionButtonComponent,
        LogComponent,
        DateRangeComponent,
        ViewComponent,
        CustomComponentComponent,
        TableImitationComponent,
        ActionsBarComponent,
        PageComponent,
        TitleComponent,
        TuneComponent,
        ScheduleComponent,
    ],
    exports: [
        MatTableModule,
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
    ],
    providers: [
        MyService,
        {
            provide: TitleStrategy,
            useClass: TemplatePageTitleStrategy
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        MatTableModule,
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
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        TableComponent
    ]
})
export class AppModule { }
