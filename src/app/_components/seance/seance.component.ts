import { Component, Input, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/Seance';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  @Input()  seance;
  constructor() { }

  ngOnInit(): void {
    
  }

}
