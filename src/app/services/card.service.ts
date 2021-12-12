import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICard } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private urlApi: string = environment.urlAPI;

  constructor(
    private http: HttpClient
  ) { }

  public listCardItems() {
    return this.http.get<ICard[]>(this.urlApi);
  }
}
