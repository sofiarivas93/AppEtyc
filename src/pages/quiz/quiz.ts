import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  mostrarP2: Boolean = false;
  mostrarP1: Boolean = true;
  mostrarP3: Boolean = false;
  mostrarMensajeOk: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
  next():void{
    this.mostrarP2=true;
    this.mostrarP1=false;
  }
  next2():void{
      this.mostrarP3=true;
      this.mostrarP2=false;
  }
  finalquiz():void{
      this.mostrarP3=false;
      this.mostrarMensajeOk=true;
  }
  clicError():void{
  //enable the button
    //isenabled=true;
  }
}
