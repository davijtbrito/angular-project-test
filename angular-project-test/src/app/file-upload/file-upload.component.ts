import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import * as Papa from 'papaparse';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  public files: NgxFileDropEntry[] = [];

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

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of this.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.selectedFile = file;
          this.uploadFile();

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  
}
