import { Routes } from '@angular/router';
import { HomeCardDetailComponent } from './home-card-detail/home-card-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home-detail/:id', component: HomeCardDetailComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    }
    
];
