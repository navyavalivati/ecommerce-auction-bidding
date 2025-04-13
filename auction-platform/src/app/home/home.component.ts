import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Auction } from '../auction.model';
import { AuctionService } from '../auction.service';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, 
            CommonModule, 
            MatCardModule, 
            RouterModule, 
            TimerComponent,
            MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images : string[] = [
    '/assets/ipad.png',
    '/assets/ipad.png',
    '/assets/ipad.png'
  ];

  auctions : Auction[] = [];


  categories = [
    {name: 'Electronics', icon: 'icon1'},
    {name: 'Gaming', icon: 'icon2'},
    {name: 'Furniture', icon: 'icon3'},
    {name: 'Fashion', icon: 'icon4'},
    {name: 'Books', icon: 'icon5'},
    {name:'Art & Decor', icon: 'icon6'}
  ]
  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.auctionService.getAllAuctions().subscribe((data) => {
      this.auctions = data.slice(0,3);
    });
  }
}

