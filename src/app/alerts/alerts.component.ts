import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() success;
  @Input() message;

  constructor() { }

  ngOnChanges(changes) {

    console.log(changes);
  }

  ngOnInit() {
    console.log("Initialize", this.success);
  }

  isDefined() {
    return this.success !== undefined
  }

  isValid() {
    return this.success;
  }

}
