import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicSectionComponent } from '../dynamic-section/dynamic-section.component';
import { Product } from './product.model';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements AfterViewInit{

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef | undefined;

  products: Product[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  ngAfterViewInit(): void {
    this.createDynamicComponent();
  }

  createDynamicComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicSectionComponent);

    if (this.dynamicComponentContainer !== undefined){
      const componentRef = componentFactory.create(this.dynamicComponentContainer.parentInjector);      

       // Listen for the event emitted by DynamicComponent
      componentRef.instance.createDynamicComponentEvent.subscribe(() => {
        this.createDynamicComponent();
        
        this.products.push(componentRef.instance.product);
        console.log('Total product: ' + this.products.length);

      }); 
      this.dynamicComponentContainer.insert(componentRef.hostView);
    }        
  }
}
