import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '@services/modal.service';

@Component({
    selector: 'pizza-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id?: string;
    isOpen = false;

    private element: any;

    constructor(
        private modalService: ModalService,
        el: ElementRef,
    ) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        this.modalService.add(this);

        document.body.appendChild(this.element);

        this.element.addEventListener('click', (e: { target: Element }) => {
            if (e.target.className === 'popup') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
        this.modalService.remove(this);
        this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        setTimeout(() => {
            document.body.classList.add('--popup-open');
        }, 200);

        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('--popup-open');
        this.isOpen = false;
    }
}
