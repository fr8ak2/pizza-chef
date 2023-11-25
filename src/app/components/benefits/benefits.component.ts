import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsModel, picLoadingState, TitleSizes, TitleVariants } from '@models/models';
import { PicComponent, TitleComponent, TextComponent } from '@shared/shared';

@Component({
    selector: 'pizza-benefits',
    standalone: true,
    imports: [CommonModule, PicComponent, TitleComponent, TextComponent],
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BenefitsComponent {
    @Input() benefits?: BenefitsModel[] = [];
    @Input() headingVariants?: TitleVariants;
    @Input() headingSizes?: TitleSizes;
    @Input() headingCustomClass?: string = '';
    @Input() picLoadingState?: picLoadingState;
}
