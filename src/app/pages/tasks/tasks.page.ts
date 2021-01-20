import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  //forms: Form[] = [];
  form: any = [];
  isChecked: boolean; ///bu hata olablir.
  //isCheched = 0;
  //val: string;
  //name: string[];

  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private actRounted: ActivatedRoute,
    private navctrl: NavController) { }

  ngOnInit() {
    this.loadUser();
  }

  ionViewDidEnter(){
    //this.disabledbutton = false;
  }

  async loadUser(){
    const loading = await this.loadingctrl.create({
      message : "Oluşturuluyor"
    });
    await loading.present();
    return new Promise(resolve => {
      let body = {
        action: 'task_progress',
      }
      this.accessproviders.postData(body, 'api_3.php').subscribe((res: any) => {
        if(res.success = true){
          loading.dismiss();
          this.presentToast(res.msg);
          for(let data of res.result) {
            this.form.push(data);
            //this.name.push(data.val);           
          }
          resolve(true);
          //console.log(this.form);
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

  async updateBoxes() {
    const loading = await this.loadingctrl.create({
      message : "Değişiklikler kaydediliyor"
    });
    await loading.present();
    return new Promise(resolve => {
      let body = {
        action: 'taskUpdate_progress',
        isChecked: this.isChecked
      }
      console.log(this.isChecked);
      this.accessproviders.postData(body, 'api_3.php').subscribe((res: any) => {
        if(res.success = true){
          loading.dismiss();
          this.presentToast(res.msg);
        } else {
          loading.dismiss();
          this.presentToast(res.msg);
          }
        }, (err) => {
          loading.dismiss();
          this.presentToast('Güncellendi');
      });
    });
  }

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

/*
<ion-col>
          <ion-button (click)="create_table()" [disabled]="disabledbutton">Kaydet</ion-button>
        </ion-col>
        <ion-col>
          <ion-button (click)="show table()" [disabled]="disabledbutton">Kaydet</ion-button>
        </ion-col>
*/

  /*public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];*/