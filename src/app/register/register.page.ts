import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AlertService } from '../shared/alert.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register_form: FormGroup;
  constructor( public formBuilder: FormBuilder,
               public authenticationService: AuthentificationService,
               private router: Router,
               public loadingController: LoadingController,
               private alertService: AlertService) { }

  ngOnInit() {
    let email_admin=environment.email_admin;
    let pwd_admin=environment.pwd_admin;
    this.register_form = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      displayName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      // email_admin: new FormControl('ftokiniainamarius@gmail.com', Validators.required),
      // password_admin: new FormControl('azerty', Validators.required),
      email_admin: new FormControl(email_admin, Validators.required),
      password_admin: new FormControl(pwd_admin, Validators.required),
    });
  }

  async onSubmit(){
    let values=this.register_form.value;
    //only authenticated administrators can create users
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait...'
      });
      loading.present();

    this.authenticationService.doLogin(values.email_admin, values.password_admin)
    .subscribe(
      res => {
        let one_user:any;
        one_user=res;
        let token=one_user.token;
        console.log('Res',res);
        console.log('token',token);
        let user_data = {
          username: values.username,
          name: values.displayName,
          email: values.email,
          password: values.password
        };
        // this.authenticationService.setUser(res);
        // const user = this.authenticationService.getUser();
        this.authenticationService.doRegister(user_data, token)
        .subscribe(
          result => {
            this.authenticationService.doLogin(values.email, values.password).subscribe(
              data => {
              },
              error => {
                console.log(error);
              },
              () => {
                this.router.navigateByUrl('dashboard');
                loading.dismiss();
              }
            );
            this.alertService.presentToast('Inscription réussie');

            console.log(result);
            
          },
          error => {
            console.log(error);
            loading.dismiss();
            this.router.navigateByUrl('register');
          }
        );
      },
      err => {
        console.log(err);
      }
    )
  }

  


}
