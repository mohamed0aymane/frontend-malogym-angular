import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.closeMenu();
  }

  menuValue:boolean=false;
  menu_icon:string='bi bi-list'; 
closeMenu(){
  this.menuValue=false;
  this.menu_icon='bi bi-list'; 
}
}
