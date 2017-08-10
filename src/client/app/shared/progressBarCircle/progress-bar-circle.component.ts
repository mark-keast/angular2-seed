import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'progress-bar-circle',
    template:`<h2>pr0gress bar circle</h2>
        <button (click)="randomNumber()">random {{ranNumberIs}}</button>
        {{percentage}} {{description}}
        <br />
        <canvas #circle width="300" height="300">
        <br />
        

    `
})

export class ProgressBarCircleComponent implements AfterViewInit, OnInit{
@Input() percentage:number;
@Input() description:string;
@ViewChild('circle')circle:ElementRef;

    private valuePerc:number;
    private ranNumberIs:number = 0;
    constructor() {   }

    public ngOnInit(){
        this.valuePerc = 85;

    }
    public ngAfterViewInit(){
        this.animateCircle(this.valuePerc);
    }

    // tslint:disable-next-line:no-empty
    public randomNumber() {
        let randomNumber = Math.floor(Math.random() *100) +1;
        this.ranNumberIs = randomNumber;
        this.animateCircle(randomNumber);
    }


    public animateCircle(valPerc:number) {
        this.ranNumberIs = valPerc;
        console.log(valPerc);
        valPerc = valPerc + 1;
        console.log(valPerc);
        if (valPerc < 100) {
            requestAnimationFrame(() => this.animateCircle(valPerc));
        }
  }




}