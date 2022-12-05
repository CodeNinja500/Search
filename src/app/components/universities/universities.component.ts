import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, map, Observable, switchMap} from 'rxjs';
import {UnivercityModel} from '../../models/univercity.model';
import {UniversitiesService} from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  styleUrls: ['./universities.component.scss'],
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent {

  readonly countryForm: FormGroup = new FormGroup({country: new FormControl()});

  readonly country$: Observable<string> = this.countryForm.valueChanges.pipe(
    map(form => form.country),
    debounceTime(1000)
  );

  readonly listOfUniversities$: Observable<UnivercityModel[]> = this.country$.pipe(switchMap(country => this._universitiesService.getAll(country)));

  constructor(private _universitiesService: UniversitiesService) {
  }

  onCountryFormSubmitted(countryForm: FormGroup): void {
  }
}
