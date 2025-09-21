import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SERVICES } from './services-data';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, PhotoCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  services = SERVICES;
}
