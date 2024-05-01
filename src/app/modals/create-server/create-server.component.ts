import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'info-create-server',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './create-server.component.html',
  styleUrl: './create-server.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateServerComponent { }
