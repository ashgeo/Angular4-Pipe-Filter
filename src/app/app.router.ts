import{ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import{PlayerComponent} from './components/player/player.component';

export const router: Routes =[
  {path: '', redirectTo:'app-players', pathMatch:'full'},
  {path: 'app-players', component:PlayerComponent},
];
export const routes:ModuleWithProviders = RouterModule.forRoot(router);
