import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'info-status',
    standalone: true,
    imports: [
        CommonModule, MatIcon
    ],
    templateUrl: './status.component.html',
    styleUrl: './status.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
    @Input() status: string | undefined;

    getIconName(): string {
        if (this.status === "online") return "check_circle"
        if (this.status === "error") return "cancel"
        return "pending"
    }
}
