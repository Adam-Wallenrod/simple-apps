import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

import {from, Observable} from 'rxjs';



@Component({
  selector: 'app-subject-observable',
  templateUrl: './subject-observable.component.html',
  styleUrls: ['./subject-observable.component.css']
})
export class SubjectObservableComponent implements OnInit {




  constructor() { }

  ngOnInit() {
    const subject =  new Rx.Subject();

    subject.subscribe((v) => {
      console.log('consumer A: ' + v);
    });

    subject.subscribe((v) => {
      console.log('consumer B: ' + v);
    });

    const observable = from([0, 1]);
    console.log('typeof(ob):', observable );
    observable.subscribe(subject);

    console.log('Observables: ');
    this.example1();

    console.log('===========');
    console.log('Subjects: ');
    this.example2();

    this.example3();

  }

  example1() {
    const observable = Rx.Observable.create((source) => {
      source.next(Math.random());
    });

    observable.subscribe((v) => { console.log('consumerA: ', v); } );
    observable.subscribe((v) => { console.log('consumerB: ', v); } );
  }


  example2() {
    const observable = Rx.Observable.create((source) => {
      source.next(Math.random());
    });

    const subject = new Rx.Subject();

    subject.subscribe((v) => {console.log('consumerA: ', v); } );
    subject.subscribe((v) => {console.log('consumerB: ', v); } );

    observable.subscribe(subject);
  }


  example3 () {
    const subject = new Rx.Subject();

    subject.subscribe((v) => { console.log('consumerX: ', v); });

    subject.next('XYZ');
  }
}
