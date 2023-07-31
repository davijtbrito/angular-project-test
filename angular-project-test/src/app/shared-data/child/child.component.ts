// child.component.ts
import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  sharedDataFromParent: string = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    // Access the shared data directly from the service
    this.sharedDataFromParent = this.sharedService.sharedData;
  }

  childMethod(): void {
    console.log('Method called from child component.');
    this.sharedDataFromParent = this.sharedService.sharedData;
  }
}
