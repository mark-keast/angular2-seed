import { ContactFormModel } from './../models/contact-form/contact-form';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    public data:ContactFormModel;
}
