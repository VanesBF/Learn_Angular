import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[]; 
  
  ngOnInit() {
    this.faceSnaps = [
      { 
        title: 'couche du soleil',
        description: 'Meilleur couche de soleil !',
        imageUrl: 'https://media.routard.com/image/90/8/photo.1457908.jpg',
        createdDate: new Date(),
        snaps: 0 ,
        location: 'La plage'
  
      },
      { 
        title: 'Un bon repas',
        description: 'Mon plus bon repas !',
        imageUrl: 'https://simple-lifes.com/wp-content/uploads/2021/01/taro-sauce-jaune-300x173.jpg',
        createdDate: new Date(),
        snaps: 0 ,
        location: 'La chefferie'
      },

      { 
        title: 'Ma ville ',
        description: 'Une des plus belles villes du monde !',
        imageUrl: 'https://i.pinimg.com/originals/7d/96/b4/7d96b446042f2fcf02b953ccacc2d2f1.jpg',
        createdDate: new Date(),
        snaps: 0
      }

    ];
   
  }

}



