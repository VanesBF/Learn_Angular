import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  {
  @Input() faceSnap!: FaceSnap;

  tittle!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit(){
   this.tittle = 'Vanessa';
   this.description = 'Mon amie depuis toute petite!'; 
   this.createdDate = new Date();
   this.snaps = 6;
   this.imageUrl = 'https://media.routard.com/image/90/8/photo.1457908.jpg'
   this.buttonText = 'oh Snap';
  }

  onSnap() {
    if(this.buttonText === 'oh Snap'){
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.snaps--;
      this.buttonText = 'oh Snap';
    }
 
  }
}
