import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModel } from '@models/models';

@Component({
    selector: 'pizza-nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
})
export class NavComponent {
    @Input() navItems: NavModel[] = [];

    scrollTo(id: string | undefined, e: Event) {
        e.preventDefault();

        if (typeof id === 'string') {
            const target = document.getElementById(id);
            target ? target.scrollIntoView({ behavior: 'smooth' }) : null;
        }
    }
}
