import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
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

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedService: string = '';

  constructor(private router: Router, private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
    this.filteredProjects = [...this.projects];
  }

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
