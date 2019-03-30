import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // users = [{
  //   firstName: 'Sukumar',
  //   lastName: 'Kuchana',
  //   email: 'k.sukumar@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetti',
  //   email: 'venky@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'vsubha@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'pk@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'shruthi@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chitti Babu',
  //   email: 'priyankac@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Maneesha',
  //   lastName: 'Akula',
  //   email: 'amaneeha@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Mohana Priya',
  //   lastName: 'Manohar',
  //   email: 'priya@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'chechi@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothis@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee'
  // }];

  products = [{
    phoneName: 'iPhone Xs max',
    company: 'Apple',
    manufacturer: 'Foxconn',
    owner: 'Sukumar',
    price: '$2000'
  },
  {
    phoneName: 'Mi A1',
    company: 'Redmi',
    manufacturer: 'Xiaomi',
    owner: 'Venkat',
    price: '$450'
  },
  {
    phoneName: 'iPhone Xs',
    company: 'Apple',
    manufacturer: 'Foxconn',
    owner: 'Praveen',
    price: '$2000'
  },
  {
    phoneName: 'G6',
    company: 'LG',
    manufacturer: 'LG',
    owner: 'Sukumar',
    price: '$1000'
  },
  {
    phoneName: 'Mi Note6 Pro',
    company: 'Redmi',
    manufacturer: 'xiaomi',
    owner: 'Priyanka',
    price: '$300'
  }]
  // tableHeaders = ['S.No', 'First', 'Last', 'email', 'Phone', 'Designation'];

  tableHeaders = ['S.No', 'Model', 'Company', 'Manufacturer', 'Owner', 'Price'];

  constructor() { }

  ngOnInit() {
  }

}
