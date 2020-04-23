import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './shared/authentification.service';

import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { Environment } from '@ionic-native/google-maps';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
   
    {
      title: 'Accueil',
      url: '/search-property',
      icon: 'Home'
    },
    {
      title: 'Actus',
      url: '/actus',
      icon: 'list'
    },
    {
      title: 'Properties',
      url: '/property',
      icon: 'card'
    },
    {
      title: 'Agents',
      url: '/agent',
      icon: 'person'
    },
    {
      title: 'Mon compte',
      url: '/dashboard',
      icon: 'person'
    },
  ];


    rootPage:any;
    langPhone: any;
    langPromise: any;
    langStorage: any
    langGlobal: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authenticationService: AuthentificationService,
    public translate: TranslateService,
    private storage: Storage,
  ) {
    this.initializeApp();
    // translate.setDefaultLang('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {

     // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      //this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.recupLang();
      this.authenticationService.getToken();


      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCgwW03xXNdhhzhXffpHdaA0DpRUSbaEFM',
 
        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCgwW03xXNdhhzhXffpHdaA0DpRUSbaEFM'
      });

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  recupLang() {
    this.getLang().then((result) => {
      console.log('LangPromise',result)
      this.langPromise = result;
      if (this.langPromise !== 'fr') {
        this.translate.use('en');
        console.log('en')
      } else {
        this.translate.use('fr');
        console.log('fr')
      }
    }).catch(err=>{
      console.log(err);
    });
  }

  getLang() {
    return new Promise(resolve => {
      this.storage.get('lang').then((val) => {
        this.langStorage = val;
        console.log('Lang',this.langStorage);
        if (this.langStorage == null || this.langStorage == undefined) {
            this.langPhone = 'en';
            console.log('lang phone',this.langPhone)
            this.storage.set('lang', this.langPhone);
            resolve(this.langPhone);
        } else {
          resolve(this.langStorage);
        }
      }).catch(err=>{
        console.log(err);
      });
    });
  }


  }
