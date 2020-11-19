import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input() song = {
    title : "El titulo",
    author: "El autor"
  }
  //currentAudio = this.audio;
  stop = true;

  constructor() { 
    //this.toHumanTime(0);
  }

  ngOnInit(): void {
    //this.valuePlayedTime = '00:00'
  }

 onPlay(){
     /*this.audio.play();
    this.interval = setInterval(function () {
      //do nothing. this just keeps the bar refreshing
    }, 1000);
    this.stop = false;*/
  }
  onPause(){
    /*clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;*/
  }

  onRandom(){
    
  }
  onBack(){
    
  }
  onNext(){
    
  }
  onLoop(){
    
  }

}
