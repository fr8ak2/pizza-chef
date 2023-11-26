import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NavService {
    constructor() {}

    scrollTo(e: Event, id?: string): void {
        e.preventDefault();

        if (typeof id === 'string') {
            const target = document.getElementById(id);
            target ? target.scrollIntoView({ behavior: 'smooth' }) : '';
        }
    }

    lockScroll() {
        document.body.classList.add('--prevent-scroll');
    }
    unlockScroll() {
        document.body.classList.remove('--prevent-scroll');
    }
}
