import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {
ismenuOpen= false
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.ismenuOpen = !this.ismenuOpen
  }
}
