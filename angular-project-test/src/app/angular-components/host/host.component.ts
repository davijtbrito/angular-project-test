import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicSectionComponent } from '../dynamic-section/dynamic-section.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createDynamicComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicSectionComponent);

    if (this.dynamicComponentContainer !== undefined){
      const componentRef = componentFactory.create(this.dynamicComponentContainer.parentInjector);
      this.dynamicComponentContainer.insert(componentRef.hostView);
    }    
  }
}
