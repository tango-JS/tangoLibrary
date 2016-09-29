import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

	/*
		define types before constructor
	*/

  constructor(public navCtrl: NavController) {
  	/* this like vm extention */
  }

  /*
		component functions
  */
  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
