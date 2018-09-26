import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DenunciasPage} from "../pages/denuncias/denuncias";
import {ListadoPage} from "../pages/listado/listado";
import {DetallePage} from "../pages/detalle/detalle";
import {QuizPage} from "../pages/quiz/quiz";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    QuizPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    QuizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
