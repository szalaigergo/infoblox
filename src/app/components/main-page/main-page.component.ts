import {MatButtonModule} from '@angular/material/button';
import { MockApiService } from './../../services/mock-api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TileComponent } from "../tile/tile.component";
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CreateServerComponent } from '../../modals/create-server/create-server.component';


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
        MatDialogModule
    ]
})
export class MainPageComponent {
    serverData$ = this.mockApiService.servers$;
    constructor(private readonly mockApiService: MockApiService, public dialog: MatDialog) {}

    openCreate() {
        let dialogRef = this.dialog.open(CreateServerComponent, {
            height: '600px',
            width: '600px',
          });
    }
 }
