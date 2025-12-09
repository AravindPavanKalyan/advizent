import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  services: string[];
  status: string;
  year: number;
  photos?: { url: string; altText?: string }[];
  challenges?: string[];   // new: list of challenge descriptions
  approaches?: string[];   // new: list of approach descriptions
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'residential-complex',
      title: 'Modern Residential Complex',
      description: 'A state-of-the-art residential development with sustainable design principles.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', 'Architectural Design', '3D Modeling'],
      status: 'completed',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'The multi-storey nature of the building required precise modeling for each floor and its unique features.',
        'Ensuring the BIM model accurately reflected existing conditions (floor plans & elevations) was critical.',
        'Coordinating renovation plans without a detailed 3D model was challenging.'
      ],
      approaches: [
        'Performed comprehensive point-cloud scanning and precise registration across all floors.',
        'Developed a detailed LOD 300 BIM model aligned with existing plans and elevations.',
        'Delivered coordinated BIM deliverables to streamline renovation planning and stakeholder collaboration.'
      ]
    },
    {
      id: 'office-building',
      title: 'Corporate Office Building',
      description: 'Contemporary office space designed for maximum efficiency and comfort.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['CAD Services', 'Structural Engineering', 'Project Management'],
      status: 'ongoing',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Multi-zone floor layouts required consistent modeling standards across departments.',
        'Client needed model deliverables compatible with existing FM workflows.',
        'Tight schedule demanded fast turnaround without sacrificing accuracy.'
      ],
      approaches: [
        'Used targeted scan workflows and phased model deliveries to meet deadlines.',
        'Created federated BIM models with clear export options for FM systems.',
        'Applied QA/QC checks to ensure model accuracy and consistency.'
      ]
    },
    {
      id: 'shopping-center',
      title: 'Urban Shopping Center',
      description: 'Modern retail space integrated with community amenities.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', '3D Modeling', 'Project Management'],
      status: 'completed',
      year: 2023,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Large open retail spaces required accurate as-built geometry for fit-outs.',
        'Multiple stakeholders needed a single source of truth for design coordination.',
        'Integrating MEP within constrained ceiling spaces was complex.'
      ],
      approaches: [
        'Produced high-fidelity as-built BIM with zonal breakdowns for tenants.',
        'Established a coordinated model with clear clash-resolution workflows.',
        'Provided detailed MEP routing models and coordination drawings.'
      ]
    },
    {
      id: 'residential-heritage',
      title: 'Residential Heritage Project',
      description: 'Renovation and adaptive reuse of a heritage residential block.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', 'Architectural Design', 'Project Management'],
      status: 'completed',
      year: 2022,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Heritage fabric required careful documentation and non-destructive scanning.',
        'Maintaining historical details while upgrading systems was required.',
        'Limited access areas added complexity to data capture.'
      ],
      approaches: [
        'Applied specialized scanning techniques to preserve heritage features.',
        'Developed reversible design options within the BIM model for approvals.',
        'Used targeted capture and manual surveying to fill gaps.'
      ]
    },
    {
      id: 'innovation-hub',
      title: 'Innovation Hub',
      description: 'A collaborative workspace and innovation centre.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['CAD Services', '3D Modeling', 'Project Management'],
      status: 'ongoing',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Flexible workspace requirements demanded adaptable BIM elements.',
        'Integration of MEP and smart systems required detailed coordination.',
        'Rapid prototyping of interior layouts was expected by the client.'
      ],
      approaches: [
        'Delivered parametric BIM elements to support multiple layout options.',
        'Coordinated MEP and smart systems in federated models.',
        'Enabled quick iterations through reusable BIM families and templates.'
      ]
    },
    {
      id: 'residential-complex1',
      title: 'Modern Residential Complex',
      description: 'A state-of-the-art residential development with sustainable design principles.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', 'Architectural Design', '3D Modeling'],
      status: 'completed',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'The multi-storey nature of the building required precise modeling for each floor and its unique features.',
        'Ensuring the BIM model accurately reflected existing conditions (floor plans & elevations) was critical.',
        'Coordinating renovation plans without a detailed 3D model was challenging.'
      ],
      approaches: [
        'Performed comprehensive point-cloud scanning and precise registration across all floors.',
        'Developed a detailed LOD 300 BIM model aligned with existing plans and elevations.',
        'Delivered coordinated BIM deliverables to streamline renovation planning and stakeholder collaboration.'
      ]
    },
    {
      id: 'office-building1',
      title: 'Corporate Office Building',
      description: 'Contemporary office space designed for maximum efficiency and comfort.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['CAD Services', 'Structural Engineering', 'Project Management'],
      status: 'ongoing',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Multi-zone floor layouts required consistent modeling standards across departments.',
        'Client needed model deliverables compatible with existing FM workflows.',
        'Tight schedule demanded fast turnaround without sacrificing accuracy.'
      ],
      approaches: [
        'Used targeted scan workflows and phased model deliveries to meet deadlines.',
        'Created federated BIM models with clear export options for FM systems.',
        'Applied QA/QC checks to ensure model accuracy and consistency.'
      ]
    },
    {
      id: 'shopping-center1',
      title: 'Urban Shopping Center',
      description: 'Modern retail space integrated with community amenities.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', '3D Modeling', 'Project Management'],
      status: 'completed',
      year: 2023,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Large open retail spaces required accurate as-built geometry for fit-outs.',
        'Multiple stakeholders needed a single source of truth for design coordination.',
        'Integrating MEP within constrained ceiling spaces was complex.'
      ],
      approaches: [
        'Produced high-fidelity as-built BIM with zonal breakdowns for tenants.',
        'Established a coordinated model with clear clash-resolution workflows.',
        'Provided detailed MEP routing models and coordination drawings.'
      ]
    },
    {
      id: 'residential-heritage1',
      title: 'Residential Heritage Project',
      description: 'Renovation and adaptive reuse of a heritage residential block.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', 'Architectural Design', 'Project Management'],
      status: 'completed',
      year: 2022,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Heritage fabric required careful documentation and non-destructive scanning.',
        'Maintaining historical details while upgrading systems was required.',
        'Limited access areas added complexity to data capture.'
      ],
      approaches: [
        'Applied specialized scanning techniques to preserve heritage features.',
        'Developed reversible design options within the BIM model for approvals.',
        'Used targeted capture and manual surveying to fill gaps.'
      ]
    },
    {
      id: 'innovation-hub1',
      title: 'Innovation Hub',
      description: 'A collaborative workspace and innovation centre.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['CAD Services', '3D Modeling', 'Project Management'],
      status: 'ongoing',
      year: 2024,
      photos: [
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Exterior view of Urban Shopping Center' },
        { url: '/assets/4d-bim-services-main.jpg.webp', altText: 'Interior atrium of Urban Shopping Center' }
      ],
      challenges: [
        'Flexible workspace requirements demanded adaptable BIM elements.',
        'Integration of MEP and smart systems required detailed coordination.',
        'Rapid prototyping of interior layouts was expected by the client.'
      ],
      approaches: [
        'Delivered parametric BIM elements to support multiple layout options.',
        'Coordinated MEP and smart systems in federated models.',
        'Enabled quick iterations through reusable BIM families and templates.'
      ]
    }
  ];

  constructor() {
    // runtime check to help catch accidental duplicate ids during development
    const ids = this.projects.map(p => p.id);
    const dup = ids.find((id, idx) => ids.indexOf(id) !== idx);
    if (dup) {
      // eslint-disable-next-line no-console
      console.warn(`ProjectsService: duplicate project id detected: "${dup}"`);
    }
  }

  getProjects(): Project[] {
    return [...this.projects];
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  // Helper: returns the route path for a project (useful when rendering <a [href]> or tests)
  getProjectUrl(id: string): string {
    return `/project/${encodeURIComponent(id)}`;
  }
}
