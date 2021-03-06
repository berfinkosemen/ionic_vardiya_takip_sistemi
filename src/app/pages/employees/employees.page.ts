import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {


  textFilter = '';

  datastorage: any;
  name: string;
  users: any = [];
  limit: number = 13;
  start: number = 0;

  constructor(
    private router: Router,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProviders,
    private navctrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.get('storage_session').then((res) => {
      //console.log(res);
      this.datastorage = res;
      this.name = this.datastorage.fullname;
    });
    this.start = 0;
    this.users = [];
    this.loadUsers();
  }

  async tryLogout(){
    this.storage.clear();
    this.navctrl.navigateRoot('/login');
    const toast = await this.toastctrl.create({
      message: 'Çıkış Yapılıyor..',
      duration: 1500
    });
    toast.present();
  }

  async loadUsers(){
    return new Promise(resolve => {
      let body = {
        action: 'load_users',
        start: this.start,
        limit: this.limit
      }
      this.accessproviders.postData(body, 'api.php').subscribe((res: any) => {
        for(let data of res.result) {
          this.users.push(data);
        }
        resolve(true);
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

  async loadData(){
    this.start += this.limit;
    setTimeout(() => {
      this.loadUsers().then(() => {
        //event.target.complete();
      });
    }, 500);
  }

  async openCRUD(a){
    this.router.navigate(['/crud/' + a]);
  }

  async presentToast(a){
    const toast = await this.toastctrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }

  async go_info(a)
  {
    this.router.navigate(['/info/' + a]); 
  }

  filterText( event )
  {
    const text = event.target.value;
    this.textFilter = text;
  }

}
  

/*
  <ion-item-option (click)="openCRUD(user.user_id)">Düzenle</ion-item-option>
  <ion-item-option (click)="DeleteUser(user.user_id)" color="danger">Sil</ion-item-option>

    async openCRUD(a){
    this.router.navigate(['/crud/' + a]);
  }

    async DeleteUser(a){
    return new Promise(resolve => {
      let body = {
        action: 'delete_user',
        id: a
      }
      this.accessproviders.postData(body, 'api.php').subscribe((res: any) => {
        if(res.success == true){
          this.presentToast("Kullanıcı başarıyla silindi.");
          this.ionViewDidEnter();
        } else {
          this.presentToast("Kullanıcı silinemedi.");
        }
      });
    });
  }
*/