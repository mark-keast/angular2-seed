import { FormService } from './../services/form.service';
import { FormNavigator } from './../navigator/form.navigator';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactFormModel } from './../models/contact-form/contact-form';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

// import { ValidationService } from '';

@Component({
    moduleId : module.id,
    selector : 'contact-us',
    templateUrl : 'contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
    private userform : FormGroup;
    private userDetails : ContactFormModel;

    constructor( private formBuilder : FormBuilder,
                 private route : Router,
                 private service : FormService,
                 private navigate : FormNavigator) { }

    public saveUser() {
        // if (this.userform.dirty && this.userform.valid) {
        //     alert(`Name: ${this.userform.value.name} Email: ${this.userform.value.email}`);
        // }

        // this.userDetails = new ContactFormModel();
        this.service.data = new ContactFormModel();

        this.service.data.name = this.userform.controls['name'].value;
        this.service.data.email = this.userform.controls['email'].value;
        this.service.data.profile = this.userform.controls['profile'].value;
        console.log(this.service);

        // this.route.navigateByUrl('/form-submited');
        // this.route.navigateByUrl('/residency');
        this.navigate.residency();
    }

    ngOnInit() {
        this.userform = this.formBuilder.group({
            'name' : ['',Validators.required],
            'email' : ['', Validators.required], //, ValidationService.emailValidator]],
            'profile' : ['', [Validators.required, Validators.minLength(10)]]
        });
    }

}
