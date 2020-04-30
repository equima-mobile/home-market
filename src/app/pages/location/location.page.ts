import { Component, OnInit } from '@angular/core';

import {
  ToastController,
  Platform
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: GoogleMap;
  address:string;
  location:any;
  latitude:any;
  longitude:any;
  constructor(public toastCtrl: ToastController,
              private route: ActivatedRoute,
              private platform: Platform,) { }

  ngOnInit() {
    this.location = this.route.snapshot.paramMap.get('location');
    console.log('location',this.location);
    this.GetCoordonnee(this.location);

    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    this.platform.ready();
    this.loadMap();
}


GetCoordonnee(location){
  let arr = location.split('"');
  arr.forEach(function (a) {
    let str = a.toString();
    console.log('Res',str);
  });

  let cordonnee=arr[3].split(',');
    console.log('coordonnee',cordonnee);
    this.latitude=cordonnee[0];
    this.longitude=cordonnee[1];

}


//Google maps
loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    // camera: {
    //   target: {
    //     lat: 43.0741704,
    //     lng: -89.3809802
    //   },
    //   zoom: 18,
    //   tilt: 30
    // }
  });
  this.goToMyLocation();
}


goToMyLocation(){
  this.map.clear();

  // Get the location of you
  this.map.getMyLocation().then((location: MyLocation) => {
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      duration: 5000
    });

    //add a marker
    let marker: Marker = this.map.addMarkerSync({
      title: '@ionic-native/google-maps plugin!',
      snippet: 'This plugin is awesome!',
      position: location.latLng,
      animation: GoogleMapsAnimation.BOUNCE
    });

    //show the infoWindow
    marker.showInfoWindow();

    //If clicked it, display the alert
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.showToast('clicked!');
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      (data) => {
          console.log("Click MAP",data);
      }
    );
  })
  .catch(err => {
    //this.loading.dismiss();
    this.showToast(err.error_message);
  });
}

async showToast(message: string) {
  let toast = await this.toastCtrl.create({
    message: message,
    duration: 2000,
    position: 'middle'
  });
  toast.present();
}

}

