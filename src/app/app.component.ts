import { Component, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from '@services/services';
import { HeaderComponent, FooterComponent } from '@layouts/layouts';
import { LandingComponent } from '@pages/pages';

@Component({
    selector: 'pizza-root',
    standalone: true,
    providers: [DataService],
    imports: [CommonModule, RouterOutlet, HeaderComponent, LandingComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    constructor(private _elementRef: ElementRef) {}
    ngOnInit(): void {
        this._elementRef.nativeElement.removeAttribute('ng-version');
    }
}
