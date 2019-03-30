import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  @Input() title: string = " ";

  constructor() { }

  ngOnInit() {
  }

}
