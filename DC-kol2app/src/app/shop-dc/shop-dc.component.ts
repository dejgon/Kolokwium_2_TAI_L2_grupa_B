import { Component, OnInit } from '@angular/core';
import { DCDataService } from '../dc-data.service';

@Component({
  selector: 'app-shop-dc',
  templateUrl: './shop-dc.component.html',
  styleUrls: ['./shop-dc.component.css']
})
export class ShopDCComponent implements OnInit {
  public items$: any;

  constructor(private service: DCDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
