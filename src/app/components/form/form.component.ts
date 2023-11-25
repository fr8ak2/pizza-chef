import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ModalService } from '@services/services';
import { ModalComponent } from '@components/components';
import { TextComponent, TitleComponent } from '@shared/shared';

@Component({
    selector: 'pizza-form',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        NgFor,
        HttpClientModule,
        ModalComponent,
        TitleComponent,
        TextComponent,
    ],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
    person = {
        name: '',
        address: '',
        phone: '',
    };

    successTitle = '';

    form!: FormGroup;

    submitted = false;

    constructor(
        private http: HttpClient,
        protected modalService: ModalService,
    ) {}
    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(this.person.name, [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('^[^.\\r\\n]+$'),
            ]),
            address: new FormControl(this.person.address, Validators.required),
            phone: new FormControl(this.person.phone, [Validators.required, Validators.pattern('[- +()0-9]+')]),
        });

        //this.successTitle = `Дорогой ${this.form.value.name}, спасибо за ваш заказ!`;
    }

    get name() {
        return this.form.get('name');
    }

    get address() {
        return this.form.get('address');
    }

    get phone() {
        return this.form.get('phone');
    }

    focusDotInput(e: Event) {
        e.preventDefault();
    }

    onSubmit(data: any): void {
        if (this.form.valid) {
            const url = 'https://reqres.in/api/contact';
            new HttpHeaders()
                .set('Authorization', 'aRIPIcVE9cFa6nStNz1hVAuEGv4qpl0d')
                .set('Content-Type', 'application/json');
            this.http.post(url, data).subscribe(() => {
                this.submitted = true;

                this.modalService.open('form');
            });
        }

        this.successTitle = `Дорогой, ${this.form.value.name}!`;
    }
}
