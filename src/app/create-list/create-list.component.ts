import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {


  constructor(private data: DataService) { }

  ngOnInit() {

  }

  addList(title,detail){
    this.data.createTodo(title,detail);
    console.log(title +"  "+detail)
  }

}
