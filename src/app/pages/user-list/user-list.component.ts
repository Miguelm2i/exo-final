import { Component, OnInit } from '@angular/core';
import { Monitor } from 'src/app/models/Monitor';
import { User } from 'src/app/models/User';
import { MonitorService } from 'src/app/services/monitor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];
  monitors : Monitor[];
  constructor(
    private serviceUser : UserService,
    private serviceMonitor : MonitorService) { }

  ngOnInit(): void {
    this.serviceUser.findAll().subscribe(data => {
      this.users = data
    }),
    this.serviceMonitor.findAll().subscribe(data => {
      this.monitors = data
    })
  }

}
