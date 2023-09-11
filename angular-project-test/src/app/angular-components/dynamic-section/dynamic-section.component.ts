import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.css']
})
export class DynamicSectionComponent {

  @Output() 
  createDynamicComponentEvent = new EventEmitter<void>();

  triggerCreateDynamicComponent() {
    this.createDynamicComponentEvent.emit();
  }

}
