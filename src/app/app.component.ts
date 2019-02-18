import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,  AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('tienda');
    this.itemsCollection.valueChanges().forEach(item => console.log(item));

  }

  addItem(item: any) {
    this.itemsCollection.add(item);
  }

  }
