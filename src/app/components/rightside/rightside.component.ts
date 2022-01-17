
import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {
  [x: string]: any;
  
ismenuOpen= false
messages: {text: string}[]=[
 
];
 text: string | undefined;
  constructor() { }

  ngOnInit(): void {}
  toggleMenu(){
    this.ismenuOpen = !this.ismenuOpen
  }
  onClick(){
  if(!this.text){
    alert('please add message!');
  return;
  }
  const newMessage = {
  text: this.text
  }
  this.messages.push(newMessage)
  this.text="";
  }
 }

