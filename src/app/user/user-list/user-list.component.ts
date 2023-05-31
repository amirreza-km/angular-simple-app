import { Component } from '@angular/core';
import { UserInterface } from './user-interface';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {
  ELEMENT_DATA: UserInterface[] = [
    {age: 25, name: 'John Doe'},
    {age: 30, name: 'Jane Smith'},
    {age: 28, name: 'Michael Brown'},
    {age: 32, name: 'Emily Davis'},
    {age: 27, name: 'William Johnson'},
    {age: 24, name: 'Ava Martinez'},
    {age: 29, name: 'Olivia Rodriguez'},
    {age: 26, name: 'Ethan Lee'},
    {age: 31, name: 'Sophia Hernandez'},
    {age: 23, name: 'Jacob Wilson'}
  ];
  
  displayedColumns: string[] = ['name', 'age', 'actions'];
  dataSource = this.ELEMENT_DATA;
  clickedRows = new Set<UserInterface>();

  test(): void {
    console.log('test');
  }
}
