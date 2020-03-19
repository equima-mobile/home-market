import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    LoginPageModule,
    RegisterPageModule
      ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
