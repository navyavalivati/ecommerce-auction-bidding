import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-post-auction',
  imports: [CommonModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButtonModule
  ],
  templateUrl: './post-auction.component.html',
  styleUrl: './post-auction.component.scss'
})
export class PostAuctionComponent {
  auctionForm: FormGroup;

  categories = ['Electronics', 'Gaming', 'Furniture', 'Fashion', 'Books', 'Art & Decor'];

  constructor(private fb: FormBuilder) {
    this.auctionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      startingBid: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      duration: ['', Validators.required],
      imageUrl: ['']
    });

  }


  onSubmit() {
    if(this.auctionForm.valid) {
      console.log('Auction submitted:', this.auctionForm.value);
      alert('Auction posted successfully!');
      this.auctionForm.reset();
    }
  }

}
