import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PruebaComponenteComponent } from './components/prueba-componente/prueba-componente.component';
import { CardService } from './services/card.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterPipe,
    UserListComponent,
    UserCardComponent,
    PruebaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
