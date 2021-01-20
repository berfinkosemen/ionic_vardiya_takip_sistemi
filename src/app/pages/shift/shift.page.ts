import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.page.html',
  styleUrls: ['./shift.page.scss'],
})
export class ShiftPage implements OnInit {

  //u_name : string = "";
  datastorage: any;
  u_name : string;
  u_durum : string = "";
  u_date : string = "";
  u_time : string = "";
  disabledbutton;

  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.get('storage_session').then((res) => {
      //console.log(res);
      this.datastorage = res;
      this.u_name = this.datastorage.fullname;
      //this.id = this.datastorage.user_id;
    });
    //this.start = 0;
    //this.users = [];
    this.disabledbutton = false;
    //this.loadUsers();
  }


  async trySave(){
    /*if(this.u_name == ""){
      this.presentToast("Ad soyad giriniz.");
    } else*/ if(this.u_date == ""){
      this.presentToast("Bugünün tarihini ekleyiniz.");
    } else if(this.u_durum == ""){
      this.presentToast("Çalışma durumunuzu seçiniz.");
    } else if(this.u_time == ""){
      this.presentToast("Calışma saatlerinizi seçiniz.");
    } else{
      this.disabledbutton = true;
      const loading = await this.loadingctrl.create({
        message : "Kayıt edildi"
      });
      await loading.present();
  
      return new Promise(resolve => {
        let body = {
          action: 'shift_progress',
          u_name: this.u_name,
          u_durum: this.u_durum,
          u_date: this.u_date,
          u_time: this.u_time
        }
        this.accessproviders.postData(body, 'api_2.php').subscribe((res: any) => {
          if(res.success = true){
            loading.dismiss();
            this.disabledbutton = false;
            this.presentToast(res.msg);
            //this.storage.set('storage_session', res.result);
            this.router.navigate(['/home']);
            //console.log("skladjklsa");
          } else {
            loading.dismiss();
            this.disabledbutton = false;
            this.presentToast(res.msg);
          }
        }, (err) => {
          loading.dismiss();
          this.presentToast('Başarılı Kayıt');
          this.router.navigate(['/home']);
        });
      });  
    } 
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
            this.trySave();
          }
        }
      ]
    });

    await alert.present();
  }
}
