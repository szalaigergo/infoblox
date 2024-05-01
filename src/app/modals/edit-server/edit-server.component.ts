import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'info-edit-server',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditServerComponent { }
