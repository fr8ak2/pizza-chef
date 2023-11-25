import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicComponent, TextComponent, TitleComponent, WrapperComponent } from '@shared/shared';
import { IMAGES_DATA } from '@data/data';
import { FormComponent } from '@components/form/form.component';

@Component({
    selector: 'pizza-footer',
    standalone: true,
    imports: [CommonModule, WrapperComponent, PicComponent, TitleComponent, TextComponent, FormComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
    readonly pic: { tasty: string } = IMAGES_DATA;
    readonly title = 'Хватит думать! <span>Доставим заказ за 30 минут!</span>';
    readonly text =
        'Мы  гарантированно доставим вашу пиццу за 30 ' +
        'минут с момента оформления заказа. Если мы' +
        ' опоздаем даже на 1 минуту - вы получаете весь ' +
        'заказ бесплатно и ваучер на скидку на ' +
        'следующий заказ. Мы гордимся нашим сервисом ' +
        'и сделаем всё, чтобы наш клиент был доволен и не остался голодный!';
}
