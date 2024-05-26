import { Component, OnInit } from '@angular/core';
import { Adherant } from '../model/adherant.model';
import { NgForm } from '@angular/forms';
import { AdherantService } from '../services/adherant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  adherant:any;
  isCreateAdherant:boolean =true;

  constructor(private adherantService:AdherantService,
              private router:Router,
              private activatedRoute:ActivatedRoute

  ){}
  ngOnInit(): void {
    //il est enapp-routing
    this.adherant=this.activatedRoute.snapshot.data['adherant'];
    if(this.adherant && this.adherant.adherantId>0){
      this.isCreateAdherant=false;
      
    }else{
      this.isCreateAdherant=true;
    }

  
  }

  saveAdherant(adherantForm:NgForm):void{
    if(this.isCreateAdherant){
      this.adherantService.saveAdherant(this.adherant).subscribe({
        next:(res:Adherant)=>{
          console.log(res);
          adherantForm.reset();
          
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
      });

    }else{
      this.adherantService.updateAdherant(this.adherant).subscribe({
        next:(res:Adherant)=>{
          this.router.navigate(["/adherant-list"]);
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
      });
    }




  }
}
