import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesProvided } from './pages/services-provided/services-provided';
import { DraftingAndBim } from './pages/services-provided/drafting-and-bim/drafting-and-bim';
import { ScanToBim } from './pages/services-provided/scan-to-bim/scan-to-bim';
import { ThreeDCadModels } from './pages/services-provided/three-d-cad-models/three-d-cad-models';
import { ScanRegistration } from './pages/services-provided/scan-registration/scan-registration';
import { PlantThreeDModel } from './pages/services-provided/plant-three-d-model/plant-three-d-model';
import { ReverseEngineering } from './pages/services-provided/reverse-engineering/reverse-engineering';
import { ThreeDLaserScanning } from './pages/services-provided/three-d-laser-scanning/three-d-laser-scanning';
import { TrainingServices } from './pages/services-provided/training-services/training-services';
import { Product } from './pages/product/product';
import { Industries } from './pages/industries/industries';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  {
    path: 'services',
    component: ServicesProvided,
    children: [
      { path: 'drafting-and-bim', component: DraftingAndBim },
      { path: 'scan-to-bim', component: ScanToBim },
      { path: '3d-cad-models', component: ThreeDCadModels },
      { path: 'scan-registration', component: ScanRegistration },
      { path: 'plant-3d-model', component: PlantThreeDModel },
      { path: 'reverse-engineering', component: ReverseEngineering },
      { path: '3d-laser-scanning', component: ThreeDLaserScanning },
      { path: 'training-services', component: TrainingServices },
    ]
  },
  { path: 'product', component: Product },
  { path: 'industries', component: Industries },
  { path: 'projects', component: Projects },
  { path: 'project/:id', loadComponent: () => import('./pages/projects/project-details/project-details').then(m => m.ProjectDetail) },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallback
];
