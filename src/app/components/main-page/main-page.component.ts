import {MatButtonModule} from '@angular/material/button';
import { MockApiService } from './../../services/mock-api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TileComponent } from "../tile/tile.component";

@Component({
    selector: 'info-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TileComponent,
        MatButtonModule,
    ]
})
export class MainPageComponent {
    serverData$ = this.mockApiService.servers$;
    constructor(private readonly mockApiService: MockApiService) {}
 }
