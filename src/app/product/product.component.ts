import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm:any;
  txt:string='';
  dob: Date = new Date();
  
  constructor(private fb:FormBuilder) { 
    this.productForm=this.fb.group({
      id:['', [Validators.required]],
      name:['', [Validators.required, Validators.minLength(5)]],
      price:['', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9]+')]],
      expiryDate:['']
    });
  }

  ngOnInit(): void {
  }

  get f()
  {
    return this.productForm.controls;
  }

  fn1()
  {
    // alert(this.txt);
    // this.productForm.patchValue(JSON.parse(this.txt));
    var product=JSON.parse(this.txt);
    // this.productForm.controls['name'].patchValue(product.name);
    
  }
}
