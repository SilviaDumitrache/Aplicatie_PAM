import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmacii',
  templateUrl: './farmacii.page.html',
  styleUrls: ['./farmacii.page.scss'],
})
export class FarmaciiPage implements OnInit {

  constructor(public router:Router) { }

  goBack(){
    this.router.navigate(['home'])

  }

  ngOnInit() {
  }

}
