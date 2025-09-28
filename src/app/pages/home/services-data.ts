export interface ServiceCard {
  name: string;
  route: string;
  image: string;
  logo: string;
  description: string;
}

export const SERVICES: ServiceCard[] = [
  {
    name: 'Drafting And BIM',
    route: '/services/drafting-and-bim',
    image: '/assets/4d-bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Comprehensive drafting and Building Information Modeling (BIM) solutions for your projects.'
  },
  {
    name: 'Scan To BIM',
    route: '/services/scan-to-bim',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Transform laser scans into intelligent BIM models for accurate as-built documentation.'
  },
  {
    name: '3D CAD Models',
    route: '/services/3d-cad-models',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'High-quality 3D CAD modeling services for design, engineering, and visualization.'
  },
  {
    name: 'Scan Registration',
    route: '/services/scan-registration',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Precise registration and alignment of scan data for reliable project foundations.'
  },
  {
    name: 'Plant 3D Model',
    route: '/services/plant-3d-model',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Detailed 3D modeling of industrial plants for planning, analysis, and operations.'
  },
  {
    name: 'Reverse Engineering',
    route: '/services/reverse-engineering',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Extract design information from existing objects to create accurate digital models.'
  },
  {
    name: '3D Laser Scanning',
    route: '/services/3d-laser-scanning',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Capture precise 3D measurements of environments and objects using advanced laser scanning.'
  },
  {
    name: 'Training Services',
    route: '/services/training-services',
    image: '/assets/bim-services-main.jpg.webp',
    logo: '/assets/Advizent-Blue-Transparent-FIT-1024x349.png',
    description: 'Professional training programs to empower your team with the latest industry skills.'
  }
];
