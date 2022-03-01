import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/core/services/interfaces/interface';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:Data[];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.data = res;
    })
  }

}
