import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images : string[] = [
    '/assets/ipad.png',
    '/assets/ipad.png',
    '/assets/ipad.png'
  ];
}
