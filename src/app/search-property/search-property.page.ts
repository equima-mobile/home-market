import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import { IonInfiniteScroll, ModalController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register.page';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';
import { PropertiesService } from '../shared/properties.service';
import * as Lodash from 'Lodash';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.page.html',
  styleUrls: ['./search-property.page.scss'],
})
export class SearchPropertyPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  properties: any[];
  dateFormat = environment.dateFormat;
  loggedUser: boolean = false;
  filters = {};
  filteredproperties:any;
  spinner: boolean = false;
  constructor(public propertyService: PropertiesService,
              private storage: Storage,
              private modalController: ModalController,
              private menu: MenuController,
              private router: Router,) { 
                this.menu.enable(true);
              }

  ngOnInit() {
    this.spinner=true;
    this.propertyService.Getproperties().subscribe((data: any[]) => {
    this.properties = data;
    this.spinner=false;
    console.log('properties',this.properties);
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

    //Recherche
    // search sage-femme 
  searchProperty(property: string, rule: string) {
    rule = rule.toLowerCase();
    this.filters[property] = val => val.toLowerCase().indexOf(rule) != -1;
    this.applyFilters();
  }

  findbystreet(property, rule) {
    this.filters[property] = val => val.toString().toLowerCase().search(rule) > -1 ;
    // this.filters[property] = val => val.toLowerCase().indexOf(rule) != -1;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredproperties = Lodash.filter(this.properties, Lodash.conforms(this.filters));
    console.log(this.filteredproperties)
  }

    //Fin recherche


    async register() {
      const registerModal = await this.modalController.create({
        component: RegisterPage
      });
      return await registerModal.present();
    }
    
    async login() {
      const loginModal = await this.modalController.create({
        component: LoginPage,
      });
      return await loginModal.present();
    }

    async actus(){
      this.router.navigateByUrl('actus');
    }

    async property(){
      this.router.navigateByUrl('property');
    }

    resultat(data){
      console.log(data);
      this.propertyService.setData(1, data);
      this.router.navigateByUrl('homeresult');
    }

    detailproperty(id){
      console.log('id',id);
      this.router.navigate(['/property', id]);
    }

    autentification(){
      this.router.navigateByUrl('login');
    }
    

}
