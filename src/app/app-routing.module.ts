import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent }, 
  {path: 'dashboard', component:DashboardComponent}, 
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}, 
  {path:'details/:id', component:HeroDetailComponent}
];//the :id indicates the id is a placeholder
//the '/dashboard' indicates an absolute path while just 'dashboard' indicates a  relative path
@NgModule({
  imports: [RouterModule.forRoot(routes)],//initializes the RouterModule with the provided routes.
  exports: [RouterModule],//exports the initialized RouterModule
})
export class AppRoutingModule {}//export as AppRoutingModule
