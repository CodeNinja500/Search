import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {debounceTime, map, Observable} from 'rxjs';
import {UnivercityModel} from '../models/univercity.model';

@Injectable()
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(country: string): Observable<UnivercityModel[]> {
    return this._httpClient.get<UnivercityModel[]>('http://universities.hipolabs.com/search?country='+ country);
  }
}
