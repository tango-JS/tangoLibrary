// core imports
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

// vendor imports
import { AngularFireModule } from 'angularfire2';

// app imports
import { MyApp } from './app.component';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';

// configs
export const firebaseConfig = {
  apiKey: 'AIzaSyAZiD9EooKF8HO3jmjzrwlTXRfK5h09EEo',
  authDomain: 'tangolibrary-2b004.firebaseapp.com',
  databaseURL: 'https://tangolibrary-2b004.firebaseio.com',
  storageBucket: 'tangolibrary-2b004.appspot.com'
};

@NgModule({
  declarations: [
    MyApp,
    Page2,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page2,
    Home
  ],
  providers: []
})
export class AppModule {}
