import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubjectObservableComponent } from './subject-observable/subject-observable.component';
import { RouterModule, Routes} from '@angular/router';
import { WebsocketCockpitComponent } from './websocket-cockpit/websocket-cockpit.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'subject-observable', component: SubjectObservableComponent},
  {path: 'websocket-cockpit', component: WebsocketCockpitComponent},
  {path: '', redirectTo: 'websocket-cockpit', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectObservableComponent,
    WebsocketCockpitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
