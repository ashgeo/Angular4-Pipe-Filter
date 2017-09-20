import { Component, OnInit,Pipe,PipeTransform  } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { FormsModule } from '@angular/forms';
import {FilterPipePipe} from '../../pipes/filter/filter-pipe.pipe';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
 players=[];
  constructor(private playerService: PlayerService) {  }

  ngOnInit() {
    this.playerService.getAllPalayers().subscribe(responseData=> this.players= responseData);
  }

}
