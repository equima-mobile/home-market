import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post:any;
  spinner: boolean = false;
  constructor(private route: ActivatedRoute,
              public dataService: DataService,
              // private iab: InAppBrowser,
              private platform: Platform,) { }

  ngOnInit() {
    this.spinner=true;
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getPostContent(id).subscribe((data: any[]) => {
      this.post = data;
      this.spinner=false;
      console.log('post',this.post);
      });;
  }



  openOriginal() {
    // Add InAppBrowser for app if want
    let url=this.post.link;
    console.log('url site',url);
    if (this.platform.is('android')) {
      window.open(this.post.link, '_blank');
    }

    // if (this.platform.is('ios')) {
    //   const browser = this.iab.create(url);
    // }
  }



}
