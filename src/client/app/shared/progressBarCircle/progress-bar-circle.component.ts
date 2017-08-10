import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'progress-bar-circle',
    template:`<h2>pr0gress bar circle</h2>
        {{randomNumberPerc}}% complete
        <br />
        <button (click)="randomNumber()">random {{ranNumberIs}}</button>
        {{percentage}} {{description}}
        <br />
        <canvas #circle width="300" height="300">
        <br />
        

    `
})

export class ProgressBarCircleComponent implements AfterViewInit, OnInit, OnChanges {
@Input() percentage:number;
@Input() description:string;
@ViewChild('circle')circle:ElementRef;

    private valuePerc:number;
    private ranNumberIs:number = 0;
    private randomNumberPerc:any;
    private percentageShow:number = 0;
    private canvas:CanvasRenderingContext2D;
    private startPoint = 0.06283185307179587;
    private increment = this.startPoint;
    constructor() {   }

    public ngOnInit(){
        this.valuePerc = 35;
        this.randomNumberPerc = this.valuePerc;
        this.percentageShow = (this.valuePerc / 100) * (Math.PI * 2);

    }
    public ngAfterViewInit(){
        this.animateCircle(this.valuePerc);
    }

    // tslint:disable-next-line:no-empty
    public randomNumber(passedPerc:number) {
        if (passedPerc) {
            this.randomNumberPerc = passedPerc;
        }else{
            this.randomNumberPerc = Math.floor(Math.random() *100 +1);
        }
        // this.randomNumberPerc = Math.floor(Math.random() *100 +1);
        this.percentageShow = (this.randomNumberPerc / 100) * (Math.PI * 2);
        this.startPoint = 0.06283185307179587;
        this.increment = this.startPoint;
        this.ranNumberIs = this.percentageShow ;
        this.animateCircle(this.ranNumberIs);
    }

    public doText(text:string,fontSize:string, x:number, y:number){
        this.canvas = this.circle.nativeElement.getContext('2d');
        this.canvas.save();
        this.canvas.font=fontSize;
        console.log(this.canvas);
		  // context.textAlign='center';
		  // context.textBaseline='middle';
        this.canvas.fillText(text,x,y);
        this.canvas.restore();
    }
    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        this.randomNumber(this.percentage);
    }

    public animateCircle(valPerc:number) {
        this.canvas = this.circle.nativeElement.getContext('2d');
        this.canvas.clearRect(0, 0, this.circle.nativeElement.width, this.circle.nativeElement.height);

        this.canvas.beginPath();
        this.canvas.arc(this.circle.nativeElement.width / 2,
        this.circle.nativeElement.height / 2,
        this.circle.nativeElement.width / 2.2 , -1.55, Math.PI *2,false);
        // this.canvas.arc(this.circle.nativeElement.width / 2,
        // this.circle.nativeElement.height / 2,
        // this.circle.nativeElement.width / 3 , -1.55, Math.PI *2,false);
        this.canvas.lineWidth = 10;
        this.canvas.strokeStyle = '#ffd6d6';
        this.canvas.stroke();
        this.canvas.closePath();

        this.canvas.beginPath();
        this.canvas.arc(this.circle.nativeElement.width / 2,
        this.circle.nativeElement.height / 2,
        this.circle.nativeElement.width / 2.2 , -1.55, this.increment -1.55,false);

        this.canvas.lineWidth = 10;
        this.canvas.strokeStyle = '#f70c0c';
        this.canvas.stroke();
        this.canvas.closePath();


        this.ranNumberIs = valPerc;
        // console.log(valPerc);
        // valPerc = valPerc + 1;
        // console.log(valPerc);
        this.increment = (this.increment + this.startPoint);
        if (this.increment < this.percentageShow) {
            requestAnimationFrame(() => this.animateCircle(valPerc));
        }else {
            this.doText(this.randomNumberPerc + '%','86px sans-serif',
             (this.circle.nativeElement.width / 4 ) *1.09,
             (this.circle.nativeElement.height / 4)*1.98);
            this.doText('complete','56px sans-serif',
             (this.circle.nativeElement.width / 4 ) *0.480,
             (this.circle.nativeElement.height / 4)*2.8);
        }
  }




}