import { Component, OnInit } from '@angular/core';
import { AdherantService } from '../services/adherant.service';
import { Contact } from '../model/contact.model';
import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  dataSource: Contact[]=[];
  displayedColumns:string[]=[
    'contactId',
    'contactName',
    'contactEmail',
    'contactMessage',
    'update',
    'delete'
  ];
  
  constructor(private adherantService:AdherantService,
    private router:Router
  ){
    this.getContactList();
  }
  ngOnInit(): void {
    
  }
  getContactList():void{
    this.adherantService.getContacts().subscribe({
      next:(res:Contact[])=>{
        this.dataSource=res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }
  deleteContact(contactId:number):void{
    console.log(contactId);
    this.adherantService.deleteContact(contactId).subscribe({
    next:(res)=>{
      console.log(res);
      this.getContactList();
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }

    });

  }

  updateContact(contactId:number):void{
    this.router.navigate(['/contact',{contactId:contactId}]);
  }
}
