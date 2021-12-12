import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),
    ])
  ]
})
export class UserCardComponent implements OnInit {

  @Input() card: ICard;

  constructor() { }

  ngOnInit() {
  }

}
