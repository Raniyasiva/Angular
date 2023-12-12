import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  imageUrls: string | null = null;
  dataSource:any;
  constructor (private http: HttpClient)
  {
  this.dataSource = [];
  }

onFileSelected(event: any) 
{
  this.selectedFile = event.target.files[0];
  console.log('Selected File:', this.selectedFile);
}

uploadFile() 
{
    if (this.selectedFile)
    {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log('FormData:',formData);      
      this.http.post('http://localhost:3000/upload', formData).subscribe(
        (res:any) => {
          alert(res.message);
        },
        error => {
          console.error('File upload failed:', error);
        }
      );
    }
}
}

  // ngOnInit(): void {
  //   this.http.get('http://localhost:3000/display').subscribe(
  //     (res: any) => {
  //       if (res.status === 1) {
  //         this.imageUrls = res.images;
  //       } else {
  //         console.error('Invalid response:', res);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }

