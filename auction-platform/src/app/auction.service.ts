import { Injectable } from '@angular/core';
import { Auction } from './auction.model';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private auctions: Auction [] = [
    {
      id: '1',
      title: 'Vintage Camera',
      currentBid: 120,
      endTime: '2025-04-09T15:30:00Z',
      imageUrl: 'https://via.placeholder.com/300?text=Camera'
    },
    {
      id: '2',
      title: 'Used Gaming Laptop',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: 'https://via.placeholder.com/300?text=Laptop'
    },
    {
      id: '3',
      title: 'Used Ipad',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: 'https://via.placeholder.com/300?text=Ipad'
    }
  ];

  getAllAuctions(): Observable<Auction[]> {
    return of(this.auctions);
  }
}
