import { Component } from '@angular/core';
import * as Papa from 'papaparse';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('csvFile', this.selectedFile);
  
      // Simulate an HTTP request to parse the CSV content
      // Replace this with your actual server-side logic to parse the CSV
      // You can use Angular's HttpClient to make a real HTTP request to your server.
  
      Papa.parse(this.selectedFile, {
        header: true, // Assumes the first row contains column headers
        skipEmptyLines: true,
        complete: (result) => {
          // 'result.data' contains the parsed CSV data as an array of objects
          console.log('Parsed CSV data:', result.data);
          // You can now use 'result.data' in your application
        },
        error: (error) => {
          console.error('CSV parsing error:', error.message);
        },
      });
    } else {
      console.error('No file selected');
    }
  }
  
}
