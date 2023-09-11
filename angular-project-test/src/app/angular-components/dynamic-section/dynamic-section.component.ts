import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../host/product.model';

@Component({
  selector: 'app-dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.css']
})
export class DynamicSectionComponent {

  @Output() 
  createDynamicComponentEvent = new EventEmitter<void>();  

  product: Product = {
    name:'',
    description:'',
  };

  constructor() {}

  triggerCreateDynamicComponent() {
    console.log('Adding: ' + JSON.stringify(this.product));
    this.createDynamicComponentEvent.emit();
  }

}
