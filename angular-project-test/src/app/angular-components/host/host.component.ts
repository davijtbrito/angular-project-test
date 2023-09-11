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

        console.log('Products: ' + JSON.stringify(this.products));
      }); 

      // Listen for the deleteComponentEvent emitted by DynamicComponent
      componentRef.instance.deleteDynamicComponentEvent.subscribe(() => {
        if (this.dynamicComponentContainer !== undefined){
          console.log('Product to be deleted: ' + JSON.stringify(componentRef.instance.product));
          const prod = componentRef.instance.product;
          this.products = this.products.filter((p) => prod.name !== p.name);
          this.dynamicComponentContainer.remove(this.dynamicComponentContainer.indexOf(componentRef.hostView));

          console.log('Products: ' + JSON.stringify(this.products));
          console.log('Total: ' + this.products.length);
        }        
      });
      
      this.dynamicComponentContainer.insert(componentRef.hostView);
    }        
  }
}
