import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mespreferences',
  templateUrl: './mespreferences.page.html',
  styleUrls: ['./mespreferences.page.scss'],
})
export class MespreferencesPage implements OnInit {
  langSelect:any;
  langPhone = {fr:'fr', en:'en'};
  langueSt:any;
  langSelct:any;
  langChoix:any;
  placeholder:any;
  spinner: boolean = false;

  constructor(public translate: TranslateService,
              private storage: Storage, ) {
    this.langAffiche(); 
   }

  ngOnInit() {
  }

  langAffiche(){
    this.storage.get("lang").then((res)=>{
      this.langSelect=res;
      console.log('Lang Préférence',this.langSelect);
      if(this.langSelect=="fr"){
        this.placeholder="français";
      }else{
        this.placeholder="english";
      }
    }).catch(err=>{
      console.log(err);
    });
  }

  langPref(){
    return new Promise(resolve=>{
      console.log('Langue',this.langSelect);
      this.langSelct=this.langSelect;
      if(this.langSelct=="fr"){
        this.langChoix="fr";
        console.log('langChoix',this.langChoix);
        this.translate.use(this.langChoix);
        resolve(this.langChoix);
      }else{
        this.langChoix="en";
        console.log('langChoix',this.langChoix);
        this.translate.use(this.langChoix);
        resolve(this.langChoix);
      }
    });
  }

  langStorag(){
    this.langPref().then((val)=>{
      console.log('Onchange lang',val);
      this.langueSt=val;
      this.storage.set('lang', this.langueSt);
    }).catch(err=>{
      console.log(err);
    });
  }

}
