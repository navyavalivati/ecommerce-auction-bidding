import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../auction.model';
import { AuctionService } from '../auction.service';
import { CommonModule } from '@angular/common';
import { TimerComponent } from '../timer/timer.component';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-auction-list',
  imports: [CommonModule, RouterModule, TimerComponent, MatCardModule, MatButtonModule],
  templateUrl: './auction-list.component.html',
  styleUrl: './auction-list.component.scss'
})
export class AuctionListComponent implements OnInit{

    auctions: Auction[] = [];
   
    constructor(private auctionService: AuctionService) {}
      
    ngOnInit(): void {
      
      this.auctionService.getAllAuctions().subscribe((data) => {
      this.auctions = data;
      });
        
    }
}
