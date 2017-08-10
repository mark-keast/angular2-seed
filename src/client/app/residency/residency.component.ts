import { Observable } from 'rxjs/Observable';

import { FormNavigator } from './../navigator/form.navigator';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ContactFormModel } from './../models/contact-form/contact-form';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import { FormService } from './../services/form.service';




@Component({
    moduleId:module.id,
    selector:'residency-form',
    templateUrl:'residency.component.html'
})

export class ResidencyFormComponent implements OnInit {
    private formData:ContactFormModel;
    private residencyForm : FormGroup;

    constructor(private service : FormService,
                private formBuilder : FormBuilder,
                private router : Router,
                private navigate : FormNavigator) {
    }

    public updateResidency() {
        this.formData.houseNumber = this.residencyForm.controls['houseNumber'].value;
        this.formData.address1 = this.residencyForm.controls['address1'].value;
        this.formData.address2 = this.residencyForm.controls['address2'].value;
        this.formData.postcode = this.residencyForm.controls['postcode'].value;
        // this.router.navigateByUrl('/form-submited');
        this.navigate.formSubmited();
    }

    ngOnInit() {
        this.formData = this.service.data;

        this.residencyForm = this.formBuilder.group({
            houseNumber:['',Validators.required],
            address1:['',Validators.required],
            address2: [''],
            postcode:['',Validators.required],
        });

    }
}



@Component({
  template: `counter - {{counter}}<br />
  counter by this.addItemStream - {{addItemStream}}<br />
  nameNew = {{nameNew}}`,
  selector : 'cartbadge-cmp',
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBadgeCmpComponent implements OnInit {

  @Input() addItemStream:Observable<any>;
  @Input() nameNew:string;
  counter = 0;

  ngOnInit() {
    //   this.addItemStream.subscribe((value) :void => {   THIS DONT WORK... NEEDS TO BE DATA DRIVEN
    //     console.log('ggg');
    //   });
    // this.addItemStream.subscribe(() => {
    //   this.counter++; // application state changed
    // });
  }
}




