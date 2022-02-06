import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {
  title = 'whatsappui'
  isnewChatOpen = false;
  ispicOpen = false;
  text: string = "";
  constructor( private sharedService: SharedDataService) { }
  

  ngOnInit(): void {
  }

  sendSelection(data: string) {
    this.sharedService.selectionSubject.next(data);
  }

 
}
