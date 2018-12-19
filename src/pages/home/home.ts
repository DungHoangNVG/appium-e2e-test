import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheet, ActionSheetOptions} from "@ionic-native/action-sheet";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string;
  inputtext: string;
  selectedAction;
  image;

  constructor(private navCtrl: NavController, private actionSheet: ActionSheet, private screenOrientation: ScreenOrientation, private camera: Camera) {

  }

  setMessage() {
    this.message = 'Button clicked, success!';
  }

  openActionSheet() {
    let buttonLabels = ['Go home', 'Travel the world'];

    const options: ActionSheetOptions = {
      title: 'What do you want to do?',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Blow up the world',
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      this.selectedAction = 'Button pressed: ' + buttonIndex;
    });
  }

  lockScreenToPortrait() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

}
