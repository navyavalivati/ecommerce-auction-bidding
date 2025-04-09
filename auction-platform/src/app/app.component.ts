import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [AuctionListComponent, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auction-platform';
}
