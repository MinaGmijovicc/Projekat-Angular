import { Component, OnInit } from '@angular/core';
import { CipeleService } from '../services/cipele.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CipeleModel } from '../models/cipele.model';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public vrsta: string;
  public id: string;
  cipele: Observable<CipeleModel[]>;
  // Za azuriranje
  public broj: string;
  public cena: string;
  public boja: string; 
  public slika: string;


  constructor(private route: ActivatedRoute, private cipeleService: CipeleService, public authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.cipele = await this.cipeleService.getOneById(this.id);
    } else {
      this.cipele = await this.cipeleService.getAll();
    }
    console.log(this.cipele);
    await this.getCipele();
  }

  // tslint:disable-next-line:typedef
  async getCipele() {
    this.cipele.pipe(take(1)).subscribe(cipele => {
      console.log('Pipe: ', cipele);
    });
  }
  // tslint:disable-next-line:typedef
  async delete(id) {
    await this.cipeleService.delete(id);
  }
  // tslint:disable-next-line:typedef
  async getByName() {
    console.log('Vrsta: ', this.vrsta);
    this.cipele = this.cipele.pipe(
      map(subject => subject.filter(komad => komad.vrsta === this.vrsta))
    );
  }
  // tslint:disable-next-line:typedef
  async edit(id) {
    await this.cipeleService.update(this.vrsta, this.broj, this.cena, this.slika, this.boja, id);
  }

}
