import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scard',
  templateUrl: './scard.component.html',
  styleUrls: ['./scard.component.css']
})
export class ScardComponent implements OnInit {
  @Input() count = 0;
  @Input() title = " ";
  @Input() iconClass = " ";
  @Input() color = 'black';

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return {
      'font-size': '56px',
      'color': this.color
    }
  }
}
