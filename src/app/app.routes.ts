import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Contact } from './pages/contact/contact';
import { AngularDevelopment } from './pages/angular-development/angular-development';
import { DataScience } from './pages/data-science/data-science';
import { CloudDevops } from './pages/cloud-devops/cloud-devops';
import { AiMl } from './pages/ai-ml/ai-ml';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'service', component:Service},
    {path:'contact', component:Contact},
    {path:'angular-development', component:AngularDevelopment},
    {path:'data-science', component:DataScience},
    {path:'cloud-devops', component:CloudDevops},
    {path:'ai-ml', component:AiMl}
];

