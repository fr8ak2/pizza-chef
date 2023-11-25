import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModels } from '@models/models';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'pizza-button',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input()
    config?: ButtonModels;

    scrollTo(id: string | undefined, e: Event) {
        e.preventDefault();

        if (typeof id === 'string') {
            const target = document.getElementById(id);
            target ? target.scrollIntoView({ behavior: 'smooth' }) : null;
        }
    }
}
