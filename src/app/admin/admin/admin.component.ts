import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Data } from 'src/app/core/services/interfaces/interface';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Type:string = ""
  listData: Data[];
  changeOrAdd = false;
  displayedColumns: string[] = [ 'category', 'name', 'price', 'Quantity', 'options'];
  currentId:number;

  constructor(private service: ServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res) => {
      this.listData = res;
    })
  }

  onClickEdit(id: number) {
    this.Type = 'edit';
    console.log(this.Type);
    
    this.currentId = id;
    this.changeOrAdd = true;
  }

  onClickDelete(id: number) {
    this.service.DeleteData(id).subscribe((res) => {
      this.toastr.success('deleted succeesfully', 'Toastr fun!')
      console.log(res);
      this.getData();
    })
  }

  onClickAdd(): void {
    this.Type = 'add';
    this.changeOrAdd = true;
  }

  finished() {
    this.getData();
    this.Type = 'add'
    this.changeOrAdd = false;
  }

}
