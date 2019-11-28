import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from '../model/model'

@Component({
  selector: 'app-farmacii',
  templateUrl: './farmacii.page.html',
  styleUrls: ['./farmacii.page.scss'],
})
export class FarmaciiPage implements OnInit {
  public farms: Array<Farm> = new Array<Farm>();

  constructor(public router:Router) {
    this.farms.push(new Farm("Catena", "Republicii", 21));
    this.farms.push(new Farm("Sensi Blue", "Lunga", 15));
    this.farms.push(new Farm("Help Net", "Avram Iancu", 2));
    

    
   }

  goBack(){
    this.router.navigate(['home'])
  }

  

  ngOnInit() {
  }

}
