import { Component } from '@angular/core';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  phone = faPhone;
  envelope = faEnvelope;
  location = faLocationDot;
}
