import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PicModel } from '@models/models';

@Component({
    selector: 'pizza-pic',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './pic.component.html',
    styleUrl: './pic.component.scss',
})
export class PicComponent {
    @Input()
    config?: PicModel;
}
