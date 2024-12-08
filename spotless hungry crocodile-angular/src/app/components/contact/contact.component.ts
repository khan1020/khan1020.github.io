import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  phone1: string = '+123-456-7890'
  @Input()
  email1: string = 'info@smarthealthcareportal.com'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  content3: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  content4: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  address1: string = '123 Smart Healthcare Street, City, Country'
  @Input()
  content1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  content2: string = 'Get in touch with us today!'
  constructor() {}
}
