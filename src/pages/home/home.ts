import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  })
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  name1 = '';
  name2 = '';
  //score = 42;
  get score()
  {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for( let i =0; i< letters.length; i++){
    sum += letters.charCodeAt(i);
    
  }
  return sum % 101;
  }
 // constructor(public navCtrl: NavController) {

  //}

}
