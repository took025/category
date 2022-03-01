import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Data } from 'src/app/core/services/interfaces/interface';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {
  listData: Data[];
  isLinear = false;
  TestFromGroup: FormGroup;
  @Input() id?: number;
  @Input() type: string;
  @Output() didFinished = new EventEmitter<any>();


  constructor(private _formBuilder: FormBuilder,
    private service: ServiceService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getData();
    this.TestFromGroup = this._formBuilder.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      img: ['', Validators.required],
      id: ['', Validators.required],
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.id, this.type);

    if (this.id && this.type == 'edit') {
      this.service.getDataOne(this.id).subscribe((res) => {
        this.TestFromGroup.setValue(res);
      })
    } else {
      setTimeout(() => {
        this.TestFromGroup.reset();
      }, 100);
    }
  }

  getData() {
    this.service.getData().subscribe((res) => {
      this.listData = res;
    })
  }

  onSubmit(e: any) {
    const id = this.id;
    if (this.type == 'add') {
      this.service.postData(this.TestFromGroup.getRawValue()).subscribe((res) => {
        this.toastr.success('successfully added', 'successfully added')
        this.getData();
        this.TestFromGroup.reset();
        this.didFinished.emit();
      })
    } else if (this.id) {
      this.service.EditData(this.id, this.TestFromGroup.getRawValue()).subscribe((res) => {
        this.toastr.success('successfully changed', 'successfully changed')
        this.getData();
        this.TestFromGroup.reset();
        this.didFinished.emit();
      })
    }
  }
}
