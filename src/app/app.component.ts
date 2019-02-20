
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,  AngularFirestoreCollection} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  progressRef: NgProgressRef;

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(
    private afs: AngularFirestore,
    private toaster: ToastrService,
    private progress: NgProgress
  ) {
    this.itemsCollection = afs.collection<any>('tienda');
    this.itemsCollection.valueChanges().forEach(item => console.log(item));

  }

  ngOnInit(): void {
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
  }

  addItem(item: any) {
    this.itemsCollection.add(item);
  }

  setPercentage() {
    this.progressRef.inc(15);
  }

  showToaster() {
    this.progressRef.complete();

    this.toaster.success('In conclusion, there’s no blueprint when it comes to creating a folder-structure in Angular. The structure will change a lot depending on the project you’re working on. ', '', {positionClass: 'toast-top-center'});
  }

  }