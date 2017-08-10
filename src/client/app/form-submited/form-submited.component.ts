import { Component, OnInit } from '@angular/core';
import { ContactFormModel } from './../models/contact-form/contact-form';

import { FormService } from './../services/form.service';

@Component({
    moduleId:module.id,
    selector:'form-submit',
    templateUrl:'form-submited.component.html'
})
export class FormSubmitedComponent implements OnInit{
private formData:ContactFormModel;
    constructor(private service : FormService) {
    }

    ngOnInit() {
        this.formData = this.service.data;
        console.log(this.formData);
    }
}
