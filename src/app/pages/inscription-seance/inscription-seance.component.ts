import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Monitor } from 'src/app/models/Monitor';
import { Seance } from 'src/app/models/Seance';
import { User } from 'src/app/models/User';
import { MonitorService } from 'src/app/services/monitor.service';
import { SeanceService } from 'src/app/services/seance.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-inscription-seance',
  templateUrl: './inscription-seance.component.html',
  styleUrls: ['./inscription-seance.component.css']
})
export class InscriptionSeanceComponent implements OnInit {

  monitors : Monitor[];
  users : User[];
  seance : FormGroup;

  constructor(
    private serviceMonitor : MonitorService,
    private serviceUser : UserService,
    private serviceSeance : SeanceService,
    private router : Router,
    private fb : FormBuilder){

      this.seance = this.fb.group({
        eleve : [User],
        moniteur : [Monitor],
        voiture : [''],
        date : ['']
      })
     }

  ngOnInit(): void {
    this.serviceMonitor.findAll().subscribe(data => {
      this.monitors = data;
    })
    this.serviceUser.findAll().subscribe(data => {
      this.users = data;
    })
  }

  reserverSeance = () => {
    let seance : Seance = this.seance.value
    this.serviceSeance.save(seance).subscribe(user => {
      this.router.navigate(["/meeting-list"])
    })
  }

}
