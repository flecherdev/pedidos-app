import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  amount: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Banana', 'Manzana Verde', 'Pera', 'Kiwi', 'Naranja', 'Limon', 'Sandía', 'Uvas', 'Manzana Roja', 'Granada'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'amount', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 1000}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id.toString(),
    name: name,
    amount: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}