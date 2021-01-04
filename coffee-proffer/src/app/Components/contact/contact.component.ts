import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: any | undefined;

  constructor(contactsService: ContactsService) {
    contactsService.getContacts().subscribe( res =>{
      this.contacts = res;
    },err =>{
      console.log(err);
    })
   }

  ngOnInit(): void {
  }

}
