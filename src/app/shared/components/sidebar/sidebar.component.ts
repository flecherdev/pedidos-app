import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

@ViewChild('sidenav',{static: false}) sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  title = "Pedidos";

   close(title: string) {
     if ( !(title == null || title === "") )
     {
          this.title = title;
     }
 
    this.sidenav.close();
  }

  reason = '';


}
