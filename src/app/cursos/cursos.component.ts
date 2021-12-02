import { Component, OnInit } from '@angular/core';
import { Curso } from './model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  courses: Curso[] = [
    { _id: '001', nome: 'CSS', categoria: 'front-end'}
  ];
  displayedColumns = ['nome', 'categoria']

  constructor() { }

  ngOnInit(): void {
  }

}
