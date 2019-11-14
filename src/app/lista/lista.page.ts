import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(public router:Router) { }

  goBack(){
    this.router.navigate(['home'])

  }
  
  ngOnInit() {
  }

}
