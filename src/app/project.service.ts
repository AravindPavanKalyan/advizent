import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectFilter } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Modern Office Complex',
      description: 'A state-of-the-art office building with sustainable design and cutting-edge technology integration.',
      fullDescription: 'This modern office complex represents the pinnacle of sustainable commercial architecture. Featuring advanced BIM modeling, comprehensive MEP design, and thorough structural analysis, this project showcases our expertise in creating environmentally conscious and technologically advanced commercial spaces. The building incorporates renewable energy systems, smart building technologies, and optimized space utilization to create a productive and sustainable work environment.',
      image: '/assets/projects/modern-office-complex/main.jpg',
      gallery: [
        '/assets/projects/modern-office-complex/gallery-1.jpg',
        '/assets/projects/modern-office-complex/gallery-2.jpg',
        '/assets/projects/modern-office-complex/gallery-3.jpg',
        '/assets/projects/modern-office-complex/gallery-4.jpg'
      ],
      services: ['BIM Modeling', 'MEP Design', 'Structural Analysis', 'Sustainability Consulting'],
      client: 'Tech Innovations Corp',
      duration: '18 months',
      location: 'San Francisco, CA',
      slug: 'modern-office-complex',
      category: 'commercial',
      featured: true,
      completedDate: '2023-12-15',
      size: '150,000 sq ft',
      value: '$45M'
    },
    {
      id: '2',
      title: 'Luxury Residential Tower',
      description: 'High-end residential development with premium amenities and panoramic city views.',
      fullDescription: 'This luxury residential tower redefines urban living with its sophisticated design and premium amenities. Our team provided comprehensive architectural services, advanced MEP systems design, and detailed structural engineering to create a landmark residential building. The project features smart home technologies, energy-efficient systems, and world-class amenities including a rooftop garden, fitness center, and concierge services.',
      image: '/assets/projects/luxury-residential-tower/main.jpg',
      gallery: [
        '/assets/projects/luxury-residential-tower/gallery-1.jpg',
        '/assets/projects/luxury-residential-tower/gallery-2.jpg',
        '/assets/projects/luxury-residential-tower/gallery-3.jpg'
      ],
      services: ['Architectural Design', 'MEP Design', 'Structural Engineering', 'Interior Design'],
      client: 'Premium Living Developments',
      duration: '24 months',
      location: 'New York, NY',
      slug: 'luxury-residential-tower',
      category: 'residential',
      featured: true,
      completedDate: '2023-08-20',
      size: '300 units',
      value: '$180M'
    },
    {
      id: '3',
      title: 'Industrial Manufacturing Facility',
      description: 'State-of-the-art manufacturing plant with automated systems and optimized workflow design.',
      fullDescription: 'This industrial manufacturing facility represents the future of production environments. Our comprehensive approach included detailed process flow analysis, advanced MEP systems for industrial applications, and structural engineering optimized for heavy machinery and equipment. The facility features automated material handling systems, energy-efficient lighting and HVAC, and flexible manufacturing spaces that can adapt to changing production needs.',
      image: '/assets/projects/industrial-facility/main.jpg',
      gallery: [
        '/assets/projects/industrial-facility/gallery-1.jpg',
        '/assets/projects/industrial-facility/gallery-2.jpg'
      ],
      services: ['Industrial Design', 'Process Engineering', 'MEP Design', 'Automation Systems'],
      client: 'Advanced Manufacturing Inc',
      duration: '15 months',
      location: 'Detroit, MI',
      slug: 'industrial-manufacturing-facility',
      category: 'industrial',
      featured: false,
      completedDate: '2023-06-10',
      size: '200,000 sq ft',
      value: '$35M'
    },
    {
      id: '4',
      title: 'Urban Transit Hub',
      description: 'Multi-modal transportation center connecting rail, bus, and pedestrian networks.',
      fullDescription: 'This urban transit hub serves as a critical infrastructure project connecting multiple transportation modes in the city center. Our team provided comprehensive planning, structural engineering, and MEP design for this complex transportation facility. The project includes advanced passenger flow management systems, sustainable design features, and integrated technology for real-time transportation information and wayfinding.',
      image: '/assets/projects/transit-hub/main.jpg',
      gallery: [
        '/assets/projects/transit-hub/gallery-1.jpg',
        '/assets/projects/transit-hub/gallery-2.jpg',
        '/assets/projects/transit-hub/gallery-3.jpg'
      ],
      services: ['Infrastructure Planning', 'Structural Engineering', 'MEP Design', 'Traffic Engineering'],
      client: 'City Transportation Authority',
      duration: '36 months',
      location: 'Chicago, IL',
      slug: 'urban-transit-hub',
      category: 'infrastructure',
      featured: true,
      completedDate: '2023-11-30',
      size: '500,000 sq ft',
      value: '$120M'
    },
    {
      id: '5',
      title: 'Green Hospital Complex',
      description: 'Sustainable healthcare facility with advanced medical technology integration.',
      fullDescription: 'This green hospital complex sets new standards for sustainable healthcare design. The project incorporates advanced medical gas systems, specialized HVAC for healthcare environments, and flexible infrastructure to support evolving medical technologies. Our team provided comprehensive BIM modeling, MEP design, and sustainability consulting to create a healing environment that prioritizes both patient care and environmental responsibility.',
      image: '/assets/projects/green-hospital/main.jpg',
      gallery: [
        '/assets/projects/green-hospital/gallery-1.jpg',
        '/assets/projects/green-hospital/gallery-2.jpg'
      ],
      services: ['Healthcare Design', 'BIM Modeling', 'MEP Design', 'Medical Systems'],
      client: 'Regional Health Network',
      duration: '30 months',
      location: 'Seattle, WA',
      slug: 'green-hospital-complex',
      category: 'commercial',
      featured: false,
      completedDate: '2023-09-15',
      size: '400,000 sq ft',
      value: '$200M'
    },
    {
      id: '6',
      title: 'Smart Campus Renovation',
      description: 'University campus modernization with smart building technologies and sustainable systems.',
      fullDescription: 'This comprehensive campus renovation project transformed aging university facilities into a modern, connected learning environment. Our team integrated smart building technologies, energy-efficient systems, and flexible learning spaces while preserving the historical character of the campus. The project includes advanced networking infrastructure, automated building controls, and sustainable design features that reduce the campus environmental footprint.',
      image: '/assets/projects/smart-campus/main.jpg',
      gallery: [
        '/assets/projects/smart-campus/gallery-1.jpg',
        '/assets/projects/smart-campus/gallery-2.jpg',
        '/assets/projects/smart-campus/gallery-3.jpg'
      ],
      services: ['Campus Planning', 'Smart Systems', 'MEP Retrofit', 'Technology Integration'],
      client: 'State University System',
      duration: '24 months',
      location: 'Austin, TX',
      slug: 'smart-campus-renovation',
      category: 'commercial',
      featured: false,
      completedDate: '2023-05-20',
      size: '1.2M sq ft',
      value: '$85M'
    }
  ];

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectBySlug(slug: string): Observable<Project | null> {
    const project = this.projects.find(p => p.slug === slug) || null;
    return of(project);
  }

  getProjectById(id: string): Observable<Project | null> {
    const project = this.projects.find(p => p.id === id) || null;
    return of(project);
  }

  getFeaturedProjects(): Observable<Project[]> {
    const featured = this.projects.filter(p => p.featured);
    return of(featured);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    const filtered = this.projects.filter(p => p.category === category);
    return of(filtered);
  }

  filterProjects(filter: ProjectFilter): Observable<Project[]> {
    let filtered = [...this.projects];

    if (filter.category && filter.category !== 'all') {
      filtered = filtered.filter(p => p.category === filter.category);
    }

    if (filter.service) {
      filtered = filtered.filter(p => 
        p.services.some(s => s.toLowerCase().includes(filter.service!.toLowerCase()))
      );
    }

    if (filter.featured !== undefined) {
      filtered = filtered.filter(p => p.featured === filter.featured);
    }

    return of(filtered);
  }

  getUniqueCategories(): string[] {
    const categories = [...new Set(this.projects.map(p => p.category))];
    return categories;
  }

  getUniqueServices(): string[] {
    const services = [...new Set(this.projects.flatMap(p => p.services))];
    return services.sort();
  }

  getRelatedProjects(projectId: string, limit: number = 3): Observable<Project[]> {
    const currentProject = this.projects.find(p => p.id === projectId);
    if (!currentProject) return of([]);

    const related = this.projects
      .filter(p => p.id !== projectId)
      .filter(p => 
        p.category === currentProject.category || 
        p.services.some(service => currentProject.services.includes(service))
      )
      .slice(0, limit);

    return of(related);
  }
}
