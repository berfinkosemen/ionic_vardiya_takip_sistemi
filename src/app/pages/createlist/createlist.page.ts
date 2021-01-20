import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.page.html',
  styleUrls: ['./createlist.page.scss'],
})
export class CreatelistPage implements OnInit {

  g1 : string = "";
  g2 : string = "";
  g3 : string = "";
  g4 : string = "";
  g5 : string = "";
  g6 : string = "";
  g7 : string = "";
  g8 : string = "";
  disabledbutton;

  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private actRounted: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disabledbutton = false;
  }

  async tryMakeList(){
      this.disabledbutton = true;
      const loading = await this.loadingctrl.create({
        message : "Kayıt ediliyor"
      });
      await loading.present();

      return new Promise(resolve => {
        let body = {
          action: 'createlist_progress',
          g1: this.g1,
          g2: this.g2,
          g3: this.g3,
          g4: this.g4,
          g5: this.g5,
          g6: this.g6,
          g7: this.g7,
          g8: this.g8
        }
        this.accessproviders.postData(body, 'api_3.php').subscribe((res: any) => {
          if(res.success = true){
            loading.dismiss();
            this.disabledbutton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/home']);
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
            this.tryMakeList();
          }
        }
      ]
    });

    await alert.present();
  }

}
