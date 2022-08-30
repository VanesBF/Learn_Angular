import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'couche du soleil',
      'Meilleur couche de soleil !',
      'https://media.routard.com/image/90/8/photo.1457908.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Un bon repas',
      'Mon plus bon repas !',
      'https://simple-lifes.com/wp-content/uploads/2021/01/taro-sauce-jaune-300x173.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Ma ville ',
      'Une des plus belles villes du monde !',
      'https://i.pinimg.com/originals/7d/96/b4/7d96b446042f2fcf02b953ccacc2d2f1.jpg',
      new Date(),
      0
    );
  }

}



