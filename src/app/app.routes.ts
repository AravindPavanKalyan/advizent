import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesProvided } from './pages/services-provided/services-provided';
import { DraftingAndBIM } from './pages/services-provided/drafting-and-bim/drafting-and-bim';
import { ScanToBIM } from './pages/services-provided/scan-to-bim/scan-to-bim';
import { ThreeDCADModels } from './pages/services-provided/3d-cad-models/3d-cad-models';
import { ScanRegistration } from './pages/services-provided/scan-registration/scan-registration';
import { Plant3DModel } from './pages/services-provided/plant-3d-model/plant-3d-model';
import { ReverseEngineering } from './pages/services-provided/reverse-engineering/reverse-engineering';
import { ThreeDLaserScanning } from './pages/services-provided/3d-laser-scanning/3d-laser-scanning';
import { TrainingServices } from './pages/services-provided/training-services/training-services';
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
      { path: 'drafting-and-bim', component: DraftingAndBIM },
      { path: 'scan-to-bim', component: ScanToBIM },
      { path: '3d-cad-models', component: ThreeDCADModels },
      { path: 'scan-registration', component: ScanRegistration },
      { path: 'plant-3d-model', component: Plant3DModel },
      { path: 'reverse-engineering', component: ReverseEngineering },
      { path: '3d-laser-scanning', component: ThreeDLaserScanning },
      { path: 'training-services', component: TrainingServices },
    ]
  },
  { path: 'product', component: Product },
  { path: 'industries', component: Industries },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
//   { path: 'get-started', component: GetStartedComponent },
  { path: '**', redirectTo: '' } // fallback
];
