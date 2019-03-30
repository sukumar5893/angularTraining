import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  addProducts: FormGroup;
  submitted: Boolean = false;
  category: Array<string> = ["Clothes", "Watch", "Accessories"];
  subCategory = {
    'clothes': ["Formal", "Casual", "Smart Caual"],
    'watch': ["Digital", "Smart Watch", "Health Trackers"],
    'accessories': ["Headphones", "Mobile Covers", "Speakers"]
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addProducts = this.formBuilder.group(
      {
        productName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        productCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
        productPrice: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
        category: [this.category[0], Validators.required],
        subCategory: [this.subCategory.clothes[0], Validators.required],
        productImage: ['', [Validators.required, Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]],
        productDimension: ['', Validators.required]
      }
    );

    // subCategory: [this.subCategory.clothes[0], Validators.required],

  }


  getSelectedCategory() {
    switch (this.addProducts.controls['category'].value) {
      case 'Clothes': return 'clothes'
      case 'Watch': return 'watch'
      case 'Accessories': return 'accessories'
    }
  }
  get f() {

    return this.addProducts.controls;
  }

  onSubmit() {
    this.submitted = true;
  }

}
