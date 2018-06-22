import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { wrapListenerWithDirtyAndDefault } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
  
  ) { }
  
  private listID = +this.route.snapshot.paramMap.get('id');
 
  

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    
    // let idList = id
    // console.log("IdList : "+ id);
  }

  updateID(id,title,detail){
    console.log("ID update :" + id+"title update :" + title +" detail update :" + detail)
    this.data.updateID(id,title,detail);

  }

}
