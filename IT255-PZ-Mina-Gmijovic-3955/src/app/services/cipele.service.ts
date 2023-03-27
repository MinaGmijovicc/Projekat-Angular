import {Injectable} from '@angular/core';
import axios from 'axios';
import { CipeleModel } from '../models/cipele.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CipeleService {
  constructor() {

  }

  // tslint:disable-next-line:typedef
  async getAll(): Promise<Observable<CipeleModel[]>> {
    const url = 'http://it-255-pz-mg-3955.glitch.me/cipele';
    try {
      const res = await axios.get(url, {});
      const data = res.data;
      return of(data);
      // console.log('Phones: ', data);
      // return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async getOneById(id): Promise<Observable<CipeleModel[]>> {
    const url = 'http://it-255-pz-mg-3955.glitch.me/cipele/';
    try {
      const res = await axios.get(url + id,
      );
      const data = [res.data];
      console.log('Cipele: ', data);
      return of(data);
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async create(vrsta, broj, cena, slika, boja) {
    const url = 'http://it-255-pz-mg-3955.glitch.me/cipele/';
    try {
      const res = await axios.post(url, {
        vrsta, broj, cena, slika, boja
      });
      const data = res.data;
      console.log('Added: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async update(vrsta, broj, cena, slika, boja, id) {
    const url = 'it-255-pz-mg-3955.glitch.me/cipele/' + id;
    try {
      const res = await axios.put(url, {
        vrsta, broj, cena, slika, boja
      });
      const data = res.data;
      console.log('Updated: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async delete(id) {
    const url = 'http://it-255-pz-mg-3955.glitch.me/cipele/' + id;
    try {
      const res = await axios.delete(url, {data: {id}});
      const data = res.data;
      console.log('Podatak: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
}

