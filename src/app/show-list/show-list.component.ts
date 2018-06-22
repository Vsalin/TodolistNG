import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  lists$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList().subscribe(
      data => {
        this.lists$ = data 
         console.log("data: " + this.data);
      } 
    );
  
  }

  deleteList(id){  
    console.log("ID deleted :" + id)
    this.data.DeleteIdList(id);
  
  }

}
