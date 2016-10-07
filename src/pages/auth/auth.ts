import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Home } from '../home/home';

/*
  Generated class for the Auth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})

export class Auth {

	round: boolean;
	expand: boolean;
	showSpinner: boolean;
	hideSpinner: boolean;

  constructor(public navCtrl: NavController) {
  	this.round = false;
  	this.expand = false;
  	this.showSpinner = false;
  	this.hideSpinner = true;

  }

  authUser() {
  	this.showSpinner = true;
  	

  	setTimeout(() => {
  		this.round = true;
  		
  		setTimeout(() => {
  			this.hideSpinner = false;
  			this.expand = true;
	  		
	  		setTimeout(() => {
		  		this.navCtrl.setRoot(Home);
		  	},300)
	  	},2000)
  	},200)
  }

  setClass() {
  	let classes = {
  		round: this.round,
  		expand: this.expand
  	};
  	return classes;
  }

  ionViewDidLoad() {
    console.log('Hello Auth Page');
  }


}
