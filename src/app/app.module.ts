// Firebase Imports
// ------------------------------------------------------------
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyBKhNy7cWUEkq1-xx15i2AiAWfsVVyLfLo',
  authDomain: 'musiconomi-sandbox.firebaseapp.com',
  databaseURL: 'https://musiconomi-sandbox.firebaseio.com',
  storageBucket: 'musiconomi-sandbox.appspot.com',
  messagingSenderId: '740932574333'
};

// Modules
// -----------------------------------------------------------
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';

// Videogular Modules
// -----------------------------
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgStreamingModule} from 'videogular2/streaming';


// Components
// -----------------------------------------------------------
import { AppComponent }           from './app.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { DiscoverComponent }      from './components/discover/discover.component';
import { LandingPageComponent }   from './components/landing/landing-page.component';
import { SiteHeaderComponent }    from './components/header/site-header.component';
import { UploadTrackComponent }   from './components/upload/upload-track.component';

// Services
// -----------------------------------------------------------
import { AuthGuard }              from './services/authGuard.service';

// Declaration
// -----------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DiscoverComponent,
    LandingPageComponent,
    SiteHeaderComponent,
    UploadTrackComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // Angular Routes (can do this in seperate file if desired)
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'discover', component: DiscoverComponent, canActivate: [AuthGuard] },
      { path: 'upload-track', component: UploadTrackComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '' }
    ]),

    // Videogular modules
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule

  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
