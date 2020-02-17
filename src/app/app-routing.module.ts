import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'hero', component: HeroComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
