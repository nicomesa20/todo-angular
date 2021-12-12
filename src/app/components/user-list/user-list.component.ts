import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public cardsList: ICard[];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cardService.listCardItems().subscribe(cardList => {
      this.cardsList = cardList
    })
  }

}
