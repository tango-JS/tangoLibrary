import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//vendor imports
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
  tangoLibrary: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, af: AngularFire) {
  	/* this like vm extention */
    this.tangoLibrary = af.database.list('library');
  }

  /*
		component functions
  */
  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
