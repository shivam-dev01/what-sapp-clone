import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {
  title = 'whatsappui'
  isMenuOpen = false;
  ispicOpen = false;
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
