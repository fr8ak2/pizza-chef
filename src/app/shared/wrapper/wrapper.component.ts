import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pizza-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
    @HostBinding('class') class = 'wrapper';
}
