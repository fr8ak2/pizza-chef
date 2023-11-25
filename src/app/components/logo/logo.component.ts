import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LogoModel } from '@models/models';
import { PicComponent } from '@shared/shared';

@Component({
    selector: 'pizza-logo',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, PicComponent],
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
    @Input()
    config?: LogoModel;
}
