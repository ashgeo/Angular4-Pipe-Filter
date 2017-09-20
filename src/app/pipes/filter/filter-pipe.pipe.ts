import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(players: any, term: any): any {
    // term is undefined
    if(term=== undefined) return players;
    //retrun udated array
    return players.filter(function(player){
      return player.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
