import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BgImageCard {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonRoute: string;
}

@Component({
  selector: 'app-bg-image-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bg-image-cards.html',
  styleUrls: ['./bg-image-cards.scss']
})
export class BgImageCardsComponent {
  @Input() cards: BgImageCard[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showHeader: boolean = true;
  @Input() columns: '1' | '2' | '3' | '4' = '3';
  @Input() cardHeight: string = '400px';
}
