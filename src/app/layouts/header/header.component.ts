import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '@shared/shared';
import { IMAGES_DATA } from '@data/data';
import { DataService } from '@services/services';
import { NavModel } from '@models/models';
import { NavComponent, LogoComponent } from '@components/components';
import { MobileComponent } from '@components/nav/mobile/mobile.component';

@Component({
    selector: 'pizza-header',
    standalone: true,
    imports: [CommonModule, WrapperComponent, LogoComponent, NavComponent, MobileComponent],
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input()
    readonly img = IMAGES_DATA;
    menu: NavModel[] = [];

    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.loadLinks();
    }

    loadLinks() {
        this.dataService.fetchNav().subscribe(data => (this.menu = data));
    }
}
