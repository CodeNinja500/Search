import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, debounce, debounceTime, map, combineLatest} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly searchForm: FormGroup = new FormGroup({title: new FormControl()});

  public startsWith$: Observable<string> = this.searchForm.valueChanges.pipe(
    map(form => form.title),
    debounceTime(1000)
  );
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.startsWith$
  ]).pipe(map(([products, startsWith]) => {
    return products.filter(product => product.title.startsWith(startsWith))
  }));

  constructor(private _productsService: ProductsService) {
  }

  onSearchFormSubmitted(searchForm: FormGroup): void {
  }
}
