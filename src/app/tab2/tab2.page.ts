import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

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

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.photoService.loadSaved();
    //console.log("Photo Storage: " + PhotoService.Photo_Storage);
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
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
