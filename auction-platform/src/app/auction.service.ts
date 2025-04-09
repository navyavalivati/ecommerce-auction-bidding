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
      imageUrl: '/assets/vintagecamera.png'
    },
    {
      id: '2',
      title: 'Used Gaming Laptop',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/laptop.jpeg'
    },
    {
      id: '3',
      title: 'Used Ipad',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/ipad.png'
    },
    {
      id: '1',
      title: 'Vintage Camera',
      currentBid: 120,
      endTime: '2025-04-09T15:30:00Z',
      imageUrl: '/assets/vintagecamera.png'
    },
    {
      id: '2',
      title: 'Used Gaming Laptop',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/laptop.jpeg'
    },
    {
      id: '3',
      title: 'Used Ipad',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/ipad.png'
    },
    {
      id: '2',
      title: 'Used Gaming Laptop',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/laptop.jpeg'
    },
    {
      id: '3',
      title: 'Used Ipad',
      currentBid: 200,
      endTime: '2025-04-10T15:30:00Z',
      imageUrl: '/assets/ipad.png'
    }
  ];

  getAllAuctions(): Observable<Auction[]> {
    return of(this.auctions);
  }
}
