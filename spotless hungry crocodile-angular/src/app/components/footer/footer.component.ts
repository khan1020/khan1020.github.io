import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  privacyLink: string = '/privacy-policy'
  @Input()
  link8: string = 'Careers'
  @Input()
  socialLinkTitleCategory: string = 'Connect with Us'
  @Input()
  logoAlt: string = 'Smart Healthcare Portal Logo'
  @Input()
  column1Title: string = 'Company'
  @Input()
  column2Title: string = 'Quick Links'
  @Input()
  content2: string = 'Stay up to date with our latest news and updates.'
  @Input()
  cookiesLink: string = '/cookies-policy'
  @Input()
  link4: string = 'FAQs'
  @Input()
  link5: string = 'Privacy Policy'
  @Input()
  link1: string = 'About Us'
  @Input()
  link2: string = 'Services'
  @Input()
  link10: string = 'Sitemap'
  @Input()
  link7: string = 'Cookies Policy'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  link9: string = 'Blog'
  @Input()
  link6: string = 'Terms of Use'
  @Input()
  termsLink: string = '/terms-of-use'
  @Input()
  content3: string = '© 2023 Smart Healthcare Portal. All rights reserved.'
  @Input()
  action1: string = 'Subscribe'
  @Input()
  link3: string = 'Contact Us'
  constructor() {}
}
