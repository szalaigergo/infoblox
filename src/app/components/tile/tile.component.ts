import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Server } from '../../interfaces/server';

@Component({
  selector: 'info-tile',
  standalone: true,
  imports: [
    CommonModule, MatCardModule
  ],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() data: Server | undefined;

 }
