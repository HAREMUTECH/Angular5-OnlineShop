import { ProductService } from '../../services/product.service';
import { CategoriesService } from '../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;
  constructor(private Categories: CategoriesService,
              private route: ActivatedRoute,
              private productServices: ProductService,
              private router: Router) {
    this.categories$ = this.Categories.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
     this.productServices.getPID('id').take(1).subscribe( p => this.product = p);
    }
  }

  save(product) {
    if (this.id) {
      this.productServices.update(this.id, product);
    } else {
      this.productServices.create(product);
    }
    this.router.navigate(['/admin/products']);
  }
  delete() {
    if (confirm('Are sure you want to delete the Product')) {
      this.productServices.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }
  ngOnInit() {
  }

}
