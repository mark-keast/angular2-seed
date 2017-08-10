import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FormNavigator {
    private formSubmitedLink = '/form-submited';
    private formResidencyLink = '/residency';

    constructor(private router : Router) {}

    public residency() {
        this.router.navigateByUrl(this.formResidencyLink);
    }
    public formSubmited() {
        this.router.navigateByUrl(this.formSubmitedLink);
    }
}
