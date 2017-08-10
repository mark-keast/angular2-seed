import { MessageService } from './../../services/message.service';
import { OptionFormModel } from './../../models/optionFormModel/option-form-model';
import { Router, ActivatedRoute } from '@angular/router';
import { OptionOneFormModel } from './../../models/option-one-form/option-one-form';
import { OptionOneFormService } from './../../services/optionOne.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgcCliOptions } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'option-one',
    templateUrl: 'option.component.html'
})

export class OptionOneComponent implements OnInit {
    private optionsForm: FormGroup;
    private formData: OptionOneFormModel;
    private id: string;
    private formSavedYet: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private service :OptionOneFormService,
                private route : ActivatedRoute,
                private messageService: MessageService) {

        //    this.service.data = new OptionOneFormModel();
    }

    public saveForm() {
        // this.service.data.id = this.id;
        this.service.data.optionOne = this.optionsForm.controls['optionOne'].value;
        this.service.data.optionTwo = this.optionsForm.controls['optionTwo'].value;
        this.service.data.optionThree = this.optionsForm.controls['optionThree'].value;
        this.service.data.summary = this.optionsForm.controls['summary'].value;

        this.formSavedYet = true;
        console.log(this.service);

    }
    public get formSaved(){
        return this.formSavedYet;
    }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.service.data = new OptionOneFormModel();

        console.log(this.service.data);
        console.log(this.formData);

        this.optionsForm = this.formBuilder.group({
            optionOne:[this.service.data.optionOne ? this.service.data.optionOne : false ,Validators.required],
            optionTwo:[this.service.data.optionTwo ? this.service.data.optionTwo : false ,Validators.required],
            optionThree:[this.service.data.optionThree ? this.service.data.optionThree : false ,Validators.required],
            summary:[this.service.data.summary ? this.service.data.summary : '',Validators.required]
        });
    }
}

