import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step4Description: string =
    'Securely store and manage your health records online for easy access anytime, anywhere.'
  @Input()
  step3Title: string = 'Book Appointments'
  @Input()
  step4Title: string = 'Manage Your Health Records'
  @Input()
  step1Title: string = 'Create an Account'
  @Input()
  step2Description: string =
    'Easily search for healthcare providers based on your location, specialty, or insurance coverage.'
  @Input()
  step2Title: string = 'Search for Healthcare Providers'
  @Input()
  step3Description: string =
    'Schedule appointments with your preferred healthcare providers at your convenience.'
  @Input()
  step1Description: string =
    'Sign up for a free account on our platform to access all the features and services.'
  constructor() {}
}
