import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
/* ^ This Component decorator:
  - specifies any class immediately below it (Tab2Page) as a component class
  - specifies its metadata

  * selector - create and inserts this view (component & template) if angular finds the tag <app-tab2></app-tab2> in any other HTML files
  * templateUrl - identifies the component's HTML template (file)
  * providers (not shown) - array of services that component reies on  
*/

export class Tab2Page { 


  //photos = this.photoService.photos;

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }
  

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  log(val) { 
    console.log(Object.keys(val));
    console.log(JSON.stringify(val));
    if (val.hasOwnProperty("id")){
      console.log(val.id);
    }
  }
    
    //"base64: " + val.base64 + "  webview: " + val.webviewPath);}
  

  
}
