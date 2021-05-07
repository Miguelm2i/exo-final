import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  @Input() monitor;
  constructor() { }

  ngOnInit(): void {
  }

}
