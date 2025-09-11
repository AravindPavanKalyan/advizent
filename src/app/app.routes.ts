import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesProvided } from './pages/services-provided/services-provided';
import { Service1 } from './pages/services-provided/service1/service1';
import { Service2 } from './pages/services-provided/service2/service2';
import { Service3 } from './pages/services-provided/service3/service3';
import { Product } from './pages/product/product';
import { Industries } from './pages/industries/industries';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
// import { GetStartedComponent } from './pages/get-started/get-started';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  {
  path: 'services',
  component: ServicesProvided,
    children: [
      { path: 'service1', component: Service1 },
      { path: 'service2', component: Service2 },
      { path: 'service3', component: Service3 },
    ]
  },
  { path: 'product', component: Product },
  { path: 'industries', component: Industries },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
//   { path: 'get-started', component: GetStartedComponent },
  { path: '**', redirectTo: '' } // fallback
];
