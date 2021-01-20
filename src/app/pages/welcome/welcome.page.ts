//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
 
  constructor(
    private router: Router,
    private navctrl: NavController) { }
 

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  next() {
    this.slides.slideNext();
  }

  ngOnInit() {
  }

  goLogin(){
    this.navctrl.navigateRoot(['/login']);
  }
  goRegistration(){
    this.navctrl.navigateRoot(['/registration']);
  }

}





