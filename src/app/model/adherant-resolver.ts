import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AdherantService } from "../services/adherant.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Adherant } from "./adherant.model";

export const AdherantResolver: ResolveFn<any>=(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    adherantService:AdherantService=inject(AdherantService)
    ):Observable<Adherant>=>{
    const adherantId=route.paramMap.get("adherantId");
    if(adherantId){
        //make api call and get data for given adherant id
        return adherantService.getAdherant(Number(adherantId));
    }else{
        //create and return empty adherant details
        const adherant:Adherant={
            adherantId: 0,
            adherantNom: '',
            adherantPrenom: '',
            adherantAge: '',
            adherantCin: '',
            adherantPoids: '',
            adherantTaille: '',
            adherantAdress: '',
            adherantContactNumber: '',
            adherantEtatMedical: '',
            adherantPack: '',
            adherantDure: '',
            adherantDate: '',
            adherantMotPasse: ''
          }
          
        return of(adherant);
    }
}