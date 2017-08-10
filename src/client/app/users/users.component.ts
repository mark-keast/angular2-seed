import { MessageService } from './../services/message.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../models/user/user';
import { UsersModule } from './users.module';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'users-list',
    templateUrl: 'users.component.html',
    styles: [`
        .setLink {
            border-left:solid 1px green;
        }
    `]
})
export class UsersComponent implements OnInit, OnDestroy {
    private users : Array<User>;
    private user : User;

        private message: any;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
    private messageService: MessageService
    ) {
        this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
            // this.users = [{
            //     firstname:'dave',
            //     lastname:'jones',
            //     email :'dave@davecom',
            //     id: '582dghu858454095bc0fa72d013f3f74'
            // },{
            //     firstname:'mark',
            //     lastname:'jones',
            //     email :'mark@davecom',
            //     id: 'dg48882658454095bc0fa72d013f3f74'
            // },{
            //     firstname:'steven',
            //     lastname:'jones',
            //     email :'steven@davecom',
            //     id: 'e9e3882659904095bc0fa72d013f3f74'
            // }];
    }
    // public get formSavedYet(){
    //         let saved = this.optionOneComponent.formSaved ? this.optionOneComponent.formSaved : false;
    //     return saved;
    // }
    ngOnInit() {
        this.users = this.route.snapshot.data['users'];
    }
    // create a user model,
    // create an array holding all Users 
    // list then all and have ID for each

    // in child show 2 sections...
    // with fields to update or just select

    // each section will have save buton.
    // stores the info into an object (need to create a model for that).

    // so on page load creates object and has no values set, but once set and visited again should show new values.



        ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
