// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData: string = ''; // A simple property to hold the shared data

  // A method to update the shared data
  updateSharedData(data: string): void {
    this.sharedData = data;
  }
}
