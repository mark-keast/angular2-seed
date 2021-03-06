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
        <canvas #circle width="{{width}}" height="{{width}}">
        <br />
        

    `
})

export class ProgressBarCircleComponent implements AfterViewInit, OnInit, OnChanges {
@Input() percentage:number;
@Input() description:string;
@Input() circleColour:string = '#f70c0c';
@Input() lineWidth:number = 14;
@Input() width:number = 300;
@ViewChild('circle')circle:ElementRef;

    private valuePerc:number;
    private ranNumberIs:number = 0;
    private randomNumberPerc:any;
    private percentageShow:number = 0;
    private canvas:CanvasRenderingContext2D;
    private startPoint = 0.06283185307179587;
    private increment = this.startPoint;

    // set default width unless changed in html 300x300
    private defaultWidth:number = 300;

    // set default font sizes based on 300x300
    private fontPercSize:string = '80';
    // private fontTextSize:string = '50';
    private fontTextSize:string = '35';

    constructor() {   }

    public ngOnInit(){
        this.valuePerc = 35;
        this.randomNumberPerc = this.valuePerc;
        this.percentageShow = (this.valuePerc / 100) * (Math.PI * 2);

    }
    public ngAfterViewInit(){
        // work out dynamic font size
        this.adjustFontSize(this.circle.nativeElement.width);
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

    public adjustFontSize(width:number){
        // 300 / 100 times the valus of width
        let newWidth = (this.defaultWidth / this.circle.nativeElement.width);//  default 300 devide by new size
        let newWidthFontPercSize = (parseInt(this.fontPercSize) / newWidth);//  * this.circle.nativeElement.width;
        let newWidthFontDescPercSize = (parseInt(this.fontTextSize) / newWidth);//  * this.circle.nativeElement.width;

        this.fontPercSize = newWidthFontPercSize.toString();
        this.fontTextSize = newWidthFontDescPercSize.toString();

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
        this.canvas.lineWidth = this.lineWidth; //8;
        this.canvas.strokeStyle = '#bdbdbd';
        this.canvas.stroke();
        this.canvas.closePath();

        this.canvas.beginPath();
        this.canvas.arc(this.circle.nativeElement.width / 2,
        this.circle.nativeElement.height / 2,
        this.circle.nativeElement.width / 2.2 , -1.55, this.increment -1.55,false);

        this.canvas.lineWidth = this.lineWidth; //8;
        this.canvas.strokeStyle = this.circleColour;
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
            this.doText(this.randomNumberPerc + '%',this.fontPercSize + 'px Catamaran, calibri, sans-serif',
             (this.circle.nativeElement.width / 4 ) *1.08,
             (this.circle.nativeElement.height / 4)*2.0);
            this.doText('complete',this.fontTextSize + 'px Catamaran, calibri, sans-serif',
             (this.circle.nativeElement.width / 4 ) *1.10,
             (this.circle.nativeElement.height / 4)*2.60);
        }
  }




}