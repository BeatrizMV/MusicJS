import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public items =[
    "Reproducción",
    "Foto",
    "Play"
  ];

  public selectedItem:string
  public onSelect(valor:string): void{
    this.selectedItem = valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
