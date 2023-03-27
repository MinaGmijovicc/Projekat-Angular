import {Component, OnInit} from '@angular/core';
import { CipeleService } from '../services/cipele.service';
import { CipeleModel } from '../models/cipele.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public vrsta: string;
  public cena: string;
  public boja: number;
  public slika: string;
  public broj: string;

  constructor(public cipeleService: CipeleService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  async create() {
    await this.cipeleService.create(this.vrsta, this.cena, this.boja, this.slika, this.broj);
  }

}
