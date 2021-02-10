import { Component, OnInit } from '@angular/core';
import { DogPhotoService } from './dog-photo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  doggo;

  constructor(public dogPhotoService: DogPhotoService) {}
  ngOnInit() {
    this.getPic();
  }
  getPic() {
    this.dogPhotoService.fetchDogPhoto().subscribe(
      data => {
        this.doggo = data;
      }, 
      error => {
        console.log("error");
      }
    );
  }
  

}
