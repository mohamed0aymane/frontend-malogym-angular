import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adherant } from '../model/adherant.model';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class AdherantService {

  constructor(private httpClient:HttpClient) { }
  api="http://localhost:9091"
  api1="http://localhost:9092"

  //pour un adherant
  public saveAdherant(adherant:Adherant):Observable<Adherant>{
    return this.httpClient.post<Adherant>(`${this.api}/save/adherant`,adherant);
  }

  public getAdherants():Observable<Adherant[]>{
    return this.httpClient.get<Adherant[]>(`${this.api}/get/adherant`);
  }

  public deleteAdherants(adherantId:number){
    return this.httpClient.delete(`${this.api}/delete/adherant/${adherantId}`);
  }
  
  public getAdherant(adherantId:number){
    return this.httpClient.get<Adherant>(`${this.api}/get/adherant/${adherantId}`);
  }

  public updateAdherant(adherant:Adherant){
    return this.httpClient.put<Adherant>(`${this.api}/update/adherant`,adherant);
  }
  
  //pour les reactions de gens concernant compoment contact
  public saveContact(contact :Contact):Observable<Contact>{
    return this.httpClient.post<Contact>(`${this.api1}/save/contact`,contact)
  }

  public getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.api1}/get/contact`);
  }

  public deleteContact(contactId:number){
    return this.httpClient.delete(`${this.api1}/delete/contact/${contactId}`);
  }
  public getContact(contactId:number){
    return this.httpClient.get<Contact>(`${this.api1}/get/contact/${contactId}`);
  }
  public updateContact(contact:Contact){
    return this.httpClient.put<Contact>(`${this.api1}/update/contact`,contact);
  }
}
