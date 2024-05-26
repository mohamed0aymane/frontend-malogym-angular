import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AdherantService } from "../services/adherant.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Contact } from "./contact.model";

export const ContactResolver: ResolveFn<any>=(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    adherantService:AdherantService=inject(AdherantService)
    ):Observable<Contact>=>{
    
        const contactId=route.paramMap.get("contactId");
    if(contactId){
        //make api call and get data for given adherant id
        return adherantService.getContact(Number(contactId));
    }else{
        //create and return empty adherant details
        const contact:Contact={
            contactId: 0,
            contactName: '',
            contactEmail: '',
            contactMessage: ''
           
          }
          
        return of(contact);
    }
}