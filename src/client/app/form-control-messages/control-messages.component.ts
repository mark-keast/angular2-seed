import { ControlMessageModule } from './control-messages.module';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'control-messages',
    templateUrl:'control-messages.component.html'
})

export class ControlMessagesComponent {
@Input() public control: FormControl;

    public get errors(){
        if (this.control.errors && this.control.dirty) {
            return true;
        }
        return false;
    }
}
