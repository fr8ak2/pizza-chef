import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModel } from '@models/models';
import { NavService } from '@services/nav.service';

@Component({
    selector: 'pizza-nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
})
export class NavComponent {
    @Input() navItems: NavModel[] = [];

    constructor(protected navService: NavService) {}

    scrollTo(e: Event, id?: string) {
        this.navService.scrollTo(e, id);
    }
}
