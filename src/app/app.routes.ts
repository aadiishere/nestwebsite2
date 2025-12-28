import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'service', component:Service},
    {path:'contact', component:Contact}
];

