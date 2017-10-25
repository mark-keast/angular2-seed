import { AccordianGroupComponent } from './accordian-group.component';
import { Component, Input, forwardRef, ContentChildren, QueryList, AfterContentInit, Renderer2 } from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'ng-accordian',
    template:`
    AccordianComponent
    <ng-content></ng-content>`
})
export class AccordianComponent implements AfterContentInit{
@Input() closeOthers:boolean = false;

@ContentChildren( forwardRef(() => AccordianGroupComponent) )
    groups: QueryList<AccordianGroupComponent>;

    constructor(private render : Renderer2){}
    public ngAfterContentInit() {
        this.groups.forEach((i,index) => {
            let attr = 'acc-' + index;
            this.render.setAttribute(i.contentArea.nativeElement, '_mk-accordian', attr);
        });
    }
    // constructor(private groups:AccordianGroupComponent){}
    public closeAll() {
        console.log(this.groups);
        console.log(this.groups.toArray());
        this.groups.forEach(i => {
            i.isOpened = false;
            i.contentArea.nativeElement.className = 'content-body';
        });
    }
}
