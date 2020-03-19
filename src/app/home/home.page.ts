import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomePage {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  items: any[];
  dateFormat = environment.dateFormat;

  loggedUser: boolean = false;
  constructor(public dataService: DataService,
     public authenticationService: AuthentificationService,
     private router: Router,
     private storage: Storage
    ) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any[]) => {
    this.items = data;
    });
    }

    ionViewWillEnter(){
    
      this.storage.get('token').then((val) => {
        const data=val;
        if(data!=undefined){
          this.loggedUser = true;
        }else{
          this.loggedUser = false;
        }
      });
      
    }

    getMorePosts(evt) {
    this.dataService.getMorePosts().subscribe((data: any[]) => {
    this.items = data;
    this.infiniteScroll.complete();
    });
    }

    infiniteScrollDisabled() {
    if (this.dataService.hasMorePosts()) {
    return false;
    } else {
    return true;
    }
    }

    goToLogin(){
      this.router.navigateByUrl('login');
    }

    logOut(){
      this.router.navigateByUrl('login');
    }

    

}
