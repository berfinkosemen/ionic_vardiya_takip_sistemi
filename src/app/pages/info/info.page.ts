import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
//import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  /*datastorage: any;
  id: number;
  user_shift: any = [];
  name: string;*/
  fullname: string;
  u_name: string;
  u_durum: string;
  u_date: string;
  u_time: string;
  users: any = [];
  //start: number = 0;

  
  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private actRounted: ActivatedRoute,
    private navctrl: NavController,
    /*private storage: Storage*/) { }


    ngOnInit() {
      this.actRounted.params.subscribe((data: any) => {
        //console.log(data);
        this.fullname = data.fullname;
    
        if(this.fullname){
          this.loadUser();
        } 
      });
    }

  ionViewDidEnter(){
    //this.disabledbutton = false;
  }


  
  async loadUser(){
    const loading = await this.loadingctrl.create({
      message : "Görüntüleniyor"
    });
    await loading.present();
    return new Promise(resolve => {
      let body = {
        action: 'kullanici_bilgileri',
        fullname: this.fullname
      }
      this.accessproviders.postData(body, 'api_2.php').subscribe((res: any) => {
        if(res.success = true){
          loading.dismiss();
          this.presentToast(res.msg);
          for(let data of res.result) {
            this.users.push(data);
          }
          resolve(true);
      
        } else {
          loading.dismiss();
          this.presentToast(res.msg);
          }
        }, (err) => {
          loading.dismiss();
          this.presentToast('Başarılı Kayıt');
      });
    });
  }

  /*
      async loadUser(){
    return new Promise(resolve => {
      let body = {
        action: 'kullanici_bilgileri',
        fullname: this.fullname
      }
      this.accessproviders.postData(body, 'api_2.php').subscribe((res: any) => {
        for(let data of res.result) {
          this.users.push(data);
        }
        resolve(true);
      });
    });
  }
  */

  /*
  if(res.success = true){
    loading.dismiss();
    this.disabledbutton = false;
    this.presentToast(res.msg);

  } else {
    loading.dismiss();
    this.presentToast(res.msg);
    }
  }, (err) => {
    loading.dismiss();
    this.presentToast('Başarılı Kayıt');
  });


  */

  async doRefresh(event){
    const loading = await this.loadingctrl.create({
      message : 'Sayfa güncelleniyor..',
    });

    await loading.present();

    this.ionViewDidEnter();
    event.target.complete();
    loading.dismiss();
  }

  async presentToast(a){
    const toast = await this.toastctrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }

  async presentAlertConfirm(a) {
    const alert = await this.alertctrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'İptal etmek',
          handler: (blah) => {
            console.log('İptali onayla: blah');
          }
        }, {
          text: 'Tekrar deneyin',
          handler: () => {
            this.loadUser();
          }
        }
      ]
    });

    await alert.present();
  }

}


