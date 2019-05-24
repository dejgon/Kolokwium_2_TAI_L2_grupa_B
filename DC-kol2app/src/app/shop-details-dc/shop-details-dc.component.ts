import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DCDataService } from '../dc-data.service';

@Component({
  selector: 'shop-details-dc',
  templateUrl: './shop-details-dc.component.html',
  styleUrls: ['./shop-details-dc.component.css']
})
export class ShopDetailsDCComponent implements OnInit {
  public id: number;
  public title: string;
  public text: string;
  public image: string;
  public price: string;

  constructor(private service: DCDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.service.getById(id).subscribe(res => {
        this.id = res['id'];
        this.title = res['title'];
        this.text = res['text'];
        this.image = res['image'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }

}
