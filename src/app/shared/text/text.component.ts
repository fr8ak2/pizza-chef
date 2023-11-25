import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextModel } from '@models/models';

@Component({
    selector: 'pizza-text',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./text.component.scss'],
    templateUrl: './text.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TextComponent implements OnInit {
    @Input() config?: TextModel;
    @HostBinding('class.--small') isSmall: boolean | undefined;
    @HostBinding('class.--big') isBig: boolean | undefined;
    @HostBinding('class') class = 'text';

    constructor() {}
    ngOnInit() {
        this.isSmall = this.config?.type === 'small';
        this.isBig = this.config?.type === 'big';
    }
}
