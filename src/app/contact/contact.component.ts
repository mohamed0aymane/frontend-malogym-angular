import { Component, OnInit } from '@angular/core';
import { AdherantService } from '../services/adherant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isCreateContact: boolean = true;

  contact: any;

  constructor(private adherantService: AdherantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contact = this.activatedRoute.snapshot.data['contact'];
    console.log(this.contact);
    if (this.contact && this.contact.contactId > 0) {
      //si l'action de modification la valeur sera false
      this.isCreateContact = false;
    } else {
      //si l'action de creation la valeur sera false
      this.isCreateContact = true;
    }
  }

  saveContact(contactForm: NgForm): void {
    if (this.isCreateContact) {
      this.adherantService.saveContact(this.contact).subscribe({
        next: (res: Contact) => {
          console.log(res);
          contactForm.reset();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
    } else {
      this.adherantService.updateContact(this.contact).subscribe({
        next: (res: Contact) => {
          this.router.navigate(["/contact-list"]);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
    }
  }

}
