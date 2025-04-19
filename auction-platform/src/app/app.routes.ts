import { Routes } from '@angular/router';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { HomeComponent } from './home/home.component';
import { BiddingComponent } from './bidding/bidding.component';
import { PostAuctionComponent } from './post-auction/post-auction.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: AuctionListComponent},
    {path: 'auction/:id', component: BiddingComponent},
    {path: 'post-auction', component: PostAuctionComponent},
    {path: '**', redirectTo: ''}
];
