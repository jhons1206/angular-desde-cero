import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titulo: string = 'Lista de cursos EDTeam';
  anchoImagen: string = '40px';
  cursos: any[] = [
    {
      id: 1,
      name: 'TypeScript desde cero',
      startDate: '02/11/2021',
      description: '<b>Aprende</b> el superset de <i><b>Javascript</b></i> desde cero',
      price: 125.20,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.jpg'
    },
    {
      id: 2,
      name: 'Python de novato a ninja',
      startDate: '20/09/2021',
      description: 'Conviertete en un ninja en el lenguaje Python',
      price: 220.00,
      rating: 4.9,
      imageUrl: 'assets/images/python.jpg'
    },
    {
      id: 3,
      name: 'Angular avanzado',
      startDate: '12/07/2021',
      description: 'Aprende a desarrollar aplicaciones SPA con Angular',
      price: 180.50,
      rating: 4.8,
      imageUrl: 'assets/images/angular.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  editarCurso(curso: any) {
    console.log('Editar', curso);
  }

  eliminarCurso(curso: any) {
    console.log('Eliminar', curso);
  }

  onMouseover(event: any) {
    console.log('Mouse Over', event);
  }

  onDobleclick(event: any) {
    console.log('Doble Click', event);
  }

}
