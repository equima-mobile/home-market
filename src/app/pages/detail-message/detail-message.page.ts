import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/message';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.page.html',
  styleUrls: ['./detail-message.page.scss'],
})
export class DetailMessagePage implements OnInit {
  idNotif:any=null;
notification:Notification= {
  authId: '',
  title: '',
  message:'',
  date:'',
  categorie:'',
  seen_global:true,
  seen_clic:true,
};
  constructor(private router: ActivatedRoute,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.idNotif = this.router.snapshot.params['id'];
  }

}
