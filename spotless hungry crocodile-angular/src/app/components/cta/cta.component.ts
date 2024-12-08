import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  content1: string =
    'Experience the future of healthcare with our innovative platform.'
  @Input()
  action1: string = 'Sign Up Now'
  @Input()
  heading1: string = 'Join Our Smart Healthcare Portal Today'
  constructor() {}
}
