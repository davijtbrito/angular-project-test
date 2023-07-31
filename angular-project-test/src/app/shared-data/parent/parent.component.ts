import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',  
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  @ViewChild(ChildComponent, { static: false }) childComponent?: ChildComponent;


  constructor(private sharedService: SharedService) { }

  sendDataToChild() {
    this.sharedService.sharedData = 'Hello from parent!';
    if (this.childComponent) {
      this.childComponent.childMethod();
    }
  }  
}
