import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import * as firebase from 'firebase';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
