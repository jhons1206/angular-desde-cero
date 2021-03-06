import { InterfaceCurso } from "../interface-curso";

export const COURSES: InterfaceCurso[] = [
  {
    id: 1,
    name: 'TypeScript desde cero',
    startDate: '02/11/2021',
    description: '<b>Aprende</b> el superset de <i><b>Javascript</b></i> desde cero',
    price: 125.20,
    rating: 4.5,
    imageUrl: 'assets/images/typescript.jpg',
    titleImage: 'Typescript'
  },
  {
    id: 2,
    name: 'Python de novato a ninja',
    startDate: '20/09/2021',
    description: 'Conviertete en un ninja en el lenguaje Python',
    price: 220.00,
    rating: 4.9,
    imageUrl: 'assets/images/python.jpg',
    titleImage: 'Python'
  },
  {
    id: 3,
    name: 'Angular avanzado',
    startDate: '12/07/2021',
    description: 'Aprende a desarrollar aplicaciones SPA con Angular',
    price: 180.50,
    rating: 4.8,
    imageUrl: 'assets/images/angular.jpg',
    titleImage: 'Angular'
  },
  {
    id: 4,
    name: 'SQL Server desde cero',
    startDate: '01/01/2022',
    description: 'Aprende a diseñar bases de datos relacionales',
    price: 240.10,
    rating: 5.4,
    imageUrl: 'assets/images/sql-server.jpg',
    titleImage: 'SQL Server'
  }
]
