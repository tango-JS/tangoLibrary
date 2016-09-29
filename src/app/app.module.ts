import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    Page2,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
