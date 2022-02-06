
import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {
  [x: string]: any;
  message!: string; 
ismenuOpen= false
public isEmojiVisible:boolean | undefined;
messages: {text: string}[]=[
 
];
 text: string = '';
 selected : string='';
  constructor( private sharedService: SharedDataService) { }

  ngOnInit(): void {

    this.sharedService.selectionSubject.subscribe(res => {
      console.log(res)
      this.selected = res;
    })

  }
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
  
setTimeout(() => {
  const objDiv = document.getElementById("message-box");
  if (objDiv) {
    objDiv.scrollIntoView(false);

console.log(objDiv.scrollHeight)
  objDiv.scrollTop = objDiv.scrollHeight;
}

  
}, 0);

  }
  public addEmoji(_event: any){

    this.text = this.text + _event.emoji.native
    

    this.isEmojiVisible= false;
 
  }

 
keyUp(e: any) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    // Do something
    this.onClick();
}
}

}

