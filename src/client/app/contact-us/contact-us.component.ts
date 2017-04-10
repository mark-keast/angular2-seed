import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
// import { ValidationService } from '';

@Component({
    moduleId : module.id,
    selector : 'contact-us',
    templateUrl : 'contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
    userform : FormGroup;

    constructor( private formBuilder : FormBuilder) { }

    public saveUser() {
        if (this.userform.dirty && this.userform.valid) {
            alert(`Name: ${this.userform.value.name} Email: ${this.userform.value.email}`);
        }
    }

    ngOnInit() {
        this.userform = this.formBuilder.group({
            'name' : ['',Validators.required],
            'email' : ['', Validators.required], //, ValidationService.emailValidator]],
            'profile' : ['', [Validators.required, Validators.minLength(10)]]
        });
    }

}
