import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop-item-dc',
  templateUrl: './shop-item-dc.component.html',
  styleUrls: ['./shop-item-dc.component.css']
})
export class ShopItemDCComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
