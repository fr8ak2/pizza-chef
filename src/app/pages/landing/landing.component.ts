import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent, ProductsComponent } from '@components/components';
import { DataService } from '@services/services';

@Component({
    selector: 'pizza-landing',
    standalone: true,
    imports: [CommonModule, HeroComponent, ProductsComponent, HeroComponent],
    providers: [DataService],
    templateUrl: './landing.component.html',
})
export class LandingComponent {}
