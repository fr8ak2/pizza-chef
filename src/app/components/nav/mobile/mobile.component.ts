import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModel } from '@models/models';
import { NavComponent } from '../nav.component';

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

    isMenuOpen: boolean = false;

    toggleMenu = () => {
        this.isMenuOpen = !this.isMenuOpen;
        this.isMenuOpen ? this.lockScroll() : this.unlockScroll();
    };

    scrollTo(id: string): void {
        const target = document.getElementById(id);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        if (this.isMenuOpen) {
            this.isMenuOpen = false;
            this.unlockScroll();
        }
    }
    lockScroll() {
        document.body.classList.add('--prevent-scroll');
    }
    unlockScroll() {
        document.body.classList.remove('--prevent-scroll');
    }

    ngOnDestroy() {
        document.body.classList.remove('--prevent-scroll');
    }
}
