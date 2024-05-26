import { Component, OnInit } from '@angular/core';
import { AdherantService } from '../services/adherant.service';
import { Adherant } from '../model/adherant.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adherant-list',
  templateUrl: './adherant-list.component.html',
  styleUrl: './adherant-list.component.css'
})
export class AdherantListComponent implements OnInit{
  dataSource: Adherant[]=[];
  displayedColumns:string[]=[
    'adherantId',
    'adherantNom',
    'adherantPrenom',
    'adherantAge',
    'adherantCin',
    'adherantPoids',
    'adherantTaille',
    'adherantAdress',
    'adherantContactNumber',
    'adherantEtatMedical',
    'adherantPack',
    'adherantDure',
    'adherantDate',
    'adherantMotPasse',
    'update',
    'delete'
  ];

  constructor(private adherantService:AdherantService,
              private router: Router
  ){
    this.getAdherantList();
  }
  
  ngOnInit(): void {
   
  }
  getAdherantList():void{
    this.adherantService.getAdherants().subscribe({
      next:(res:Adherant[])=>{
        this.dataSource=res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }


  deleteAdherant(adherantId:number):void{
   
    this.adherantService.deleteAdherants(adherantId).subscribe({
    next:(res)=>{
      console.log(res);
      this.getAdherantList();
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }

    });

  }

  updateAdherant(adherantId:number):void{
    this.router.navigate(['/register',{adherantId:adherantId}]);
  }
}
