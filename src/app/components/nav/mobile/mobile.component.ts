import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModel } from '@models/models';
import { NavComponent } from '../nav.component';
import { NavService } from '@services/services';

@Component({
    selector: 'pizza-mobile',
    standalone: true,
    imports: [CommonModule, NavComponent],
    templateUrl: './mobile.component.html',
    styleUrl: './mobile.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class MobileComponent implements OnDestroy {
    @Input() navMobileItems: NavModel[] = [];

    constructor(protected navService: NavService) {}

    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.isMenuOpen ? this.navService.lockScroll() : this.navService.unlockScroll();
    }

    ngOnDestroy() {
        document.body.classList.remove('--prevent-scroll');
    }
}
