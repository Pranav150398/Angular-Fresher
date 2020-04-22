import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/03_pipes/models/todo.interface';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input() todos:Todo;

  selectedRow:number;

  constructor()
  {console.log("Processing..");}

  setRow(i){
    this.selectedRow=i;
  }

}
