import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/Seance';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  seances: Seance[];
  constructor(private service: SeanceService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      this.seances = data
    })
  }

}
