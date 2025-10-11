import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  services: string[]; // Array of services used in this project
  status: string;
  year: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  services = [
    'BIM Services',
    'CAD Services', 
    'Architectural Design',
    'Structural Engineering',
    '3D Modeling',
    'Project Management'
  ];

  projects: Project[] = [
    {
      id: 'residential-complex',
      title: 'Modern Residential Complex',
      description: 'A state-of-the-art residential development with sustainable design principles.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', 'Architectural Design', '3D Modeling'],
      status: 'completed',
      year: 2024
    },
    {
      id: 'office-building',
      title: 'Corporate Office Building',
      description: 'Contemporary office space designed for maximum efficiency and comfort.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['CAD Services', 'Structural Engineering', 'Project Management'],
      status: 'ongoing',
      year: 2024
    },
    {
      id: 'shopping-center',
      title: 'Urban Shopping Center',
      description: 'Modern retail space integrated with community amenities.',
      image: '/assets/4d-bim-services-main.jpg.webp',
      services: ['BIM Services', '3D Modeling', 'Project Management'],
      status: 'completed',
      year: 2023
    }
  ];

  filteredProjects: Project[] = [...this.projects];
  selectedService: string = '';

  constructor(private router: Router) { }

  filterByService(service: string) {
    this.selectedService = service;
    if (service === '') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.services.includes(service)
      );
    }
  }

  showAllProjects() {
    this.selectedService = '';
    this.filteredProjects = [...this.projects];
  }

  navigateToProject(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }
}
