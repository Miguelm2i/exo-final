import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private service : UserService,
    private router : Router) {
    this.userForm = this.fb.group({
      nom : [''],
      prenom : [''],
      age : [0]
    })
   }

  ngOnInit(): void {
  }

  inscription = () => {
    let user : User = this.userForm.value
    this.service.save(user).subscribe(user => {
      this.router.navigate(["/user-list"])
    })
  }
}
