import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuctionListComponent } from './auction-list/auction-list.component';

@Component({
  selector: 'app-root',
  imports: [AuctionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auction-platform';
}
