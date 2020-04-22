import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.page.html',
  styleUrls: ['./actus.page.scss'],
})
export class ActusPage   {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  items: any[];
  dateFormat = environment.dateFormat;

  loggedUser: boolean = false;
  spinner: boolean = false;
  constructor(public dataService: DataService,
    public authenticationService: AuthentificationService,
    private router: Router,
    private storage: Storage) { }

  ngOnInit() {
    this.spinner = true
    this.dataService.getPosts().subscribe((data: any[]) => {
      this.items = data;
      console.log('actus',this.items);
      this.spinner = false;
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



}
