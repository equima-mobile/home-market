import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import { RegisterPage } from 'src/app/register/register.page';
import { LoginPage } from 'src/app/login/login.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor( private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthentificationService,
    private navCtrl: NavController,
    private router: Router,) { 
      this.menu.enable(false);
    }

    ionViewWillEnter() {
      this.authService.getToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.router.navigateByUrl('dashboard');
        }
      });
    }
    ngOnInit() {
      
    }
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

}
