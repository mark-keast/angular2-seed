import { AccordianComponent } from './accordian.component';
import { Component,
        Input,
        ViewChild,
        ElementRef,
        Renderer,
        AfterViewInit,
        HostListener,
        Renderer2,
        Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
    moduleId:module.id,
    selector:'ng-accordian-group',
    template:`
        <div (onresize)="reSize()">
        <div tabIndex="0" #headingArea (click)="toggle()"><h3>{{heading}}</h3></div>
        <div class="content-body" #contentArea>
            <!--div *ngIf="isOpened"-->
            <div #contentOuterContainer>
                <div #content>
                <ng-content></ng-content></div>
            </div>
        </div>
        </div>
    `
})
export class AccordianGroupComponent implements AfterViewInit {
@Input('heading') heading:string;
@ViewChild('headingArea') headingArea:ElementRef;
@ViewChild('contentArea') contentArea:ElementRef;
@ViewChild('contentOuterContainer') contentOuterContainer:ElementRef;
@ViewChild('content') content:ElementRef;


public isOpened: boolean = false;
public classExpand: string;
constructor(
    private renderer: Renderer,
    private accordian: AccordianComponent,
    @Inject(DOCUMENT) private document:any) {}

 @HostListener('window:resize', ['$event'])
    onResize() {
        // remove style tag and update then add again.
        this.contentArea.nativeElement.children[1].remove();
        this.addStyle();
 }

 public addStyle() {
     // we need to grab margins to set correct height for transitions otherwise it wont work.
     let contentsChildren = this.content.nativeElement.children;
     let countMargins:number = 0;

     if(this.content.nativeElement.children.length > 0) {

        for (let i = 0; i < contentsChildren.length; i++) {
                let win = window.getComputedStyle(this.content.nativeElement.children[i], null);
                let top = parseInt(win.marginTop);
                countMargins += top;
                let bottom = parseInt(win.marginBottom);
                countMargins += bottom;
        }
     }

     const styleItem = this.document.createElement('style');
        let itemStyle = `
         .content-body{
            height:0px;            
            overflow:hidden;
            transition:transform;
            transition:height 0.3s ease-in;
        }
        .content-body.expanded-content-body-${this.classExpand} { 
            height:${this.content.nativeElement.offsetHeight + countMargins}px !important; 
            transition:height 0.3s ease-in; 
        }`;
        styleItem.innerHTML = itemStyle;
        this.contentArea.nativeElement.appendChild(styleItem);
 }
    public ngAfterViewInit() {
        // console.log(this.content.nativeElement.offsetHeight);
        // console.log(this.contentOuterContainer.nativeElement.offsetHeight);
        // console.log(this.contentArea.nativeElement.getAttribute('_mk-accordian'));
        this.classExpand = this.contentArea.nativeElement.getAttribute('_mk-accordian');
        this.addStyle();

   }

    private toggle() {
         this.isOpened = !this.isOpened;
         if (!this.isOpened) {
             this.contentArea.nativeElement.className = 'content-body';
         }
         const stausBeforeChange = this.isOpened;
         if(this.accordian.closeOthers) {
             this.accordian.closeAll();
         }
         this.isOpened = stausBeforeChange;
          if (this.isOpened) {
            this.contentArea.nativeElement.className =
                this.contentArea.nativeElement.className + ` expanded-content-body-${this.classExpand}`;
          }

    }

}
