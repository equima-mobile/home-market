import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/shared/properties.service';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-mes-infos',
  templateUrl: './mes-infos.page.html',
  styleUrls: ['./mes-infos.page.scss'],
})
export class MesInfosPage implements OnInit {
  infos_user:any;
  modifForm: FormGroup;
  constructor(public propertyService: PropertiesService,
              public formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.infos_user= this.propertyService.getData(2);
    console.log('infos user',this.infos_user);

    this.modifForm = this.formBuilder.group({
      username: new FormControl(this.infos_user.username, Validators.compose([
        Validators.required
        ])),
      nom: new FormControl(this.infos_user.user_display_name, Validators.compose([
      Validators.required
      ]))
      });

  }

  modifemail(email){
    console.log('email',email);
  }

  modify_password(){
    console.log('update pwd');
  }

  updateUser(){
    console.log('Submit form_update');
  }

}
