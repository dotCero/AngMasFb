import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  bd;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.bd = db.list('personas');
    this.items = this.bd.valueChanges();

    /*this.bd.push({nombre: 'hola', foto: 'hola.jpg', posicion: 5, apellido: {one: 'holaO', two: 'holaT'}});*/
  }

  onSubmit() {
  }
  ngOnInit() {
  }
}
