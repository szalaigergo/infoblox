import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import { Server } from '../../interfaces/server';
import { StatusComponent } from "../status/status.component";
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MockApiService } from '../../services/mock-api.service';


@Component({
    selector: 'info-tile',
    standalone: true,
    templateUrl: './tile.component.html',
    styleUrl: './tile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule, MatCardModule, MatIconModule,
        StatusComponent, MatButtonModule, MatMenuModule
    ]
})
export class TileComponent {
    constructor(private readonly mockApiService: MockApiService) {}
  @Input() data: Server | undefined;

  showOpen = false;

  toggle = () => this.showOpen = !this.showOpen

  remove = () => this.mockApiService.remove(this.data!)

 }
