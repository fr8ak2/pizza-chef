import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicComponent, WrapperComponent, TitleComponent, ButtonComponent } from '@shared/shared';
import { BenefitsComponent } from '@components/components';
import { IMAGES_DATA } from '@data/data';
import { DataService } from '@services/data.service';
import { BenefitsModel } from '@models/benefits.model';

@Component({
    selector: 'pizza-hero',
    standalone: true,
    imports: [
        CommonModule,
        PicComponent,
        WrapperComponent,
        WrapperComponent,
        TitleComponent,
        BenefitsComponent,
        ButtonComponent,
    ],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeroComponent implements OnInit {
    @Input()
    readonly pic: { hero: string } = IMAGES_DATA;
    readonly title: string = 'Самая вкусная пицца в мире <span>только в Pizza Cheff</span>';

    benefits: BenefitsModel[] = [];

    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.loadBenefits();
    }

    loadBenefits() {
        this.dataService.fetchBenefits().subscribe(data => (this.benefits = data));
    }
}
