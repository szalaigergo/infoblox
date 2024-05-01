import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MockApiService } from '../../services/mock-api.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Server } from '../../interfaces/server';
import { filter } from 'rxjs';


@Component({
  selector: 'info-create-server',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatButton
  ],
  templateUrl: './create-server.component.html',
  styleUrl: './create-server.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateServerComponent {
    nats$ = this.mockApiService.nats$;
    serverForm = new FormGroup({
        name: new FormControl(''),
        nat: new FormControl(''),
        description: new FormControl(''),
        ip: new FormControl(''),
      });
    constructor(private readonly mockApiService: MockApiService,
        public dialogRef: MatDialogRef<CreateServerComponent>
    ) {}

    invalid() {
        return (this.serverForm.controls.nat.value === '');
    }

    save() {
        const newServer: Server = {
            name: this.serverForm.controls.name.value ?? '',
            description: this.serverForm.controls.description.value ?? '',
            server_ip: this.serverForm.controls.ip.value ?? '',
            nat_space_id: this.serverForm.controls.nat.value ?? '',
            server_nat_ip: '',
            status: "pending"
        }
        this.mockApiService.save(newServer)
        this.dialogRef.close();
    }
 }
