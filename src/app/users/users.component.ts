import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id;
  // @Input() total = " ";
  // @Input() title = " ";

  // users = [{
  //   firstName: 'Sukumar',
  //   lastName: 'Kuchana',
  //   email: 'k.sukumar@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetti',
  //   email: 'venky@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'vsubha@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'pk@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'shruthi@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chitti Babu',
  //   email: 'priyankac@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Maneesha',
  //   lastName: 'Akula',
  //   email: 'amaneeha@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Mohana Priya',
  //   lastName: 'Manohar',
  //   email: 'priya@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'chechi@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothis@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Maria',
  //   lastName: 'Gallyot',
  //   email: 'maria@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Soft-Skills',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Ravi',
  //   lastName: 'Shanker',
  //   email: 'ravishanker@gmail.com',
  //   phone: '9177466048',
  //   designation: 'Tech-Lead',
  //   status: 'Active'
  // }

  // ];



  constructor(
    private router: Router, private userService: UserService
  ) { }


  users = [];

  tableHeaders = ["S.No", "First", "Last", "email", "Phone", "Designation", "Status"];

  async ngOnInit() {
    const usersList = await this.userService.getUsers();
    // console.log(usersList);
    this.users = usersList["users"];
  }

  navigateToUser(id) {
    console.log(id);
    this.router.navigate([`users/${id}`]);
  }

  len: number = this.users.length;
  getActive() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "Active") {
        count++;
      }
    }
    return count;
  }
  getInActive() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "Inactive") {
        count++;
      }
    }
    return count;
  }

}
