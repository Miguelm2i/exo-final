import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Monitor } from 'src/app/models/Monitor';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-inscription-moniteur',
  templateUrl: './inscription-moniteur.component.html',
  styleUrls: ['./inscription-moniteur.component.css']
})
export class InscriptionMoniteurComponent implements OnInit {

  monitorForm : FormGroup;
  constructor(
    private fb : FormBuilder,
    private service : MonitorService,
    private router : Router) {
    this.monitorForm = this.fb.group({
      nom : [''],
      prenom : [''],
      age : [0],
      experience : [0]
    })
   }

  ngOnInit(): void {
  }

  inscription = () => {
    let monitor: Monitor = this.monitorForm.value
    this.service.save(monitor).subscribe(user => {
      this.router.navigate(["/user-list"])
    })
  }
}
