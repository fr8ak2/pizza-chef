import { Injectable } from '@angular/core';
import { NAV_DATA, BENEFITS_DATA, PRODUCT_DATA } from '@data/data';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() {}

    fetchNav(): Observable<any> {
        return of(NAV_DATA);
    }

    fetchBenefits(): Observable<any> {
        return of(BENEFITS_DATA);
    }

    fetchProducts(): Observable<any> {
        return of(PRODUCT_DATA);
    }
}
