import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModel } from '@models/models';

@Component({
    selector: 'pizza-title',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./title.component.scss'],
    templateUrl: './title.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TitleComponent implements OnInit {
    @Input() config?: TitleModel;

    public heading: string | undefined;
    constructor() {}

    ngOnInit() {
        const size = this.config?.sizes ? ' ' + this.config?.sizes : '';
        const customClass = this.config?.customClass ? ' ' + this.config?.customClass : '';
        const mods = this.config?.modsClass ? ' ' + this.config?.modsClass : '';

        this.heading = `<${this.config?.heading} class="title${size + customClass + mods}"
        }>${this.config?.title}</${this.config?.heading}>`;
    }
}
