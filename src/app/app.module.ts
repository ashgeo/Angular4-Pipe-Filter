import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { HttpModule} from '@angular/http';
import { PlayerComponent } from './components/player/player.component';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import {PlayerService} from './services/player/player.service';
import { FilterPipePipe } from './pipes/filter/filter-pipe.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    FilterPipePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routes
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
