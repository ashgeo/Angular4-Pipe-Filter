import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(players: any, term: any): any {
    // term is undefined
    if(term=== undefined) return players;
    return players.filter(player => {
      return player.number ==term;
    });
    }
}
