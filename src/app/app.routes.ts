import { Routes } from '@angular/router';
import { HomeCardDetailComponent } from './home-card-detail/home-card-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CriarComponent } from './criar/criar.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'produto-detail/:id', component: HomeCardDetailComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'criar', component: CriarComponent
    },
    {
        path: 'contact', component: ContactComponent
    }
    
];
