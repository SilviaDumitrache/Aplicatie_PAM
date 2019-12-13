import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Med } from '../model/model';

import { ApiService } from "src/app/api/api.service";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  public meds: Array<Med> = new Array<Med>();

  constructor(private apiService: ApiService, public router:Router) { 
    this.meds.push(new Med("Paracetamol", "Catena"));
    this.meds.push(new Med("Aspirina","Sensi Blue"));
  }

  goBack(){
    this.router.navigate(['home'])

  }
  

  ngOnInit() {
    this.apiService.getAllMeds().subscribe(res => {
      console.log(res);
    });
  }
  }


