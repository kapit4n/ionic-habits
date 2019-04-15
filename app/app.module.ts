import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RouterModule, Routes } from '@angular/router';
import { MyApp } from './app.component';

import { TimelinePage } from '../pages/timeline/timeline';
import { DonePage } from '../pages/done/done';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HabitsService } from './habits.service';

const routes: Routes = [
  { path: 'ha', component: TabsPage },
  { path: 'habits-detail/:id', component: TabsPage },
  
];


@NgModule({
  declarations: [
    MyApp,
    TimelinePage,
    DonePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimelinePage,
    DonePage,
    HomePage,
    TabsPage
  ],
  providers: [HabitsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
