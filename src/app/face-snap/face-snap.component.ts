import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  {
  tittle!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(){
   this.tittle = 'Vanessa';
   this.description = 'Mon amie depuis toute petite!'; 
   this.createdDate = new Date();
   this.snaps = 6;
   this.imageUrl = 'https://media.routard.com/image/90/8/photo.1457908.jpg'
  }
}
