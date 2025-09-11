import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesProvided } from './pages/services-provided/services-provided';
import { Product } from './pages/product/product';
import { Industries } from './pages/industries/industries';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
// import { GetStartedComponent } from './pages/get-started/get-started';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'services', component: ServicesProvided },
  { path: 'product', component: Product },
  { path: 'industries', component: Industries },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
//   { path: 'get-started', component: GetStartedComponent },
  { path: '**', redirectTo: '' } // fallback
];
