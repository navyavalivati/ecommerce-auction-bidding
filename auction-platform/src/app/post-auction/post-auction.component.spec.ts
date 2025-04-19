import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuctionComponent } from './post-auction.component';

describe('PostAuctionComponent', () => {
  let component: PostAuctionComponent;
  let fixture: ComponentFixture<PostAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
