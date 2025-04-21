import { Component } from '@angular/core';


@Component({

  selector: 'app-student-table',

  templateUrl: './student-table.component.html',

  styleUrls: ['./student-table.component.css']

})

export class StudentTableComponent {

  students = [

    { id: 1, name: 'Gauri Mhaske', age: 22, course: 'Computer Science' },

    { id: 2, name: 'Vaibhav Nirmal', age: 22, course: 'Mechanical Engineering' },

    { id: 3, name: 'Abhishek Shinde', age: 21, course: 'Electrical Engineering' },

    { id: 4, name: 'Aditya Khalekar', age: 23, course: 'Civil Engineering' },

    { id: 5, name: 'Rohit Patil', age: 20, course: 'Mathematics' },

    { id: 6, name: 'Pooja Jadhav', age: 24, course: 'Physics' },

    { id: 7, name: 'Sakshi Deshmukh', age: 22, course: 'Biotechnology' },

    { id: 8, name: 'Amit Pawar', age: 21, course: 'Chemistry' },

    { id: 9, name: 'Sneha Kulkarni', age: 20, course: 'Software Engineering' },

    { id: 10, name: 'Rajesh More', age: 23, course: 'Data Science' }

  ];

}

