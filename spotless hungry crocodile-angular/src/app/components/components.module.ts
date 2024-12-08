import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Features1 } from './features1/features1.component'
import { Hero } from './hero/hero.component'
import { CTA } from './cta/cta.component'
import { Testimonial } from './testimonial/testimonial.component'
import { Features2 } from './features2/features2.component'
import { Banner2 } from './banner2/banner2.component'
import { Footer } from './footer/footer.component'
import { Navbar } from './navbar/navbar.component'
import { Pricing } from './pricing/pricing.component'
import { Contact } from './contact/contact.component'
import { Steps } from './steps/steps.component'

@NgModule({
  declarations: [
    Features1,
    Hero,
    CTA,
    Testimonial,
    Features2,
    Banner2,
    Footer,
    Navbar,
    Pricing,
    Contact,
    Steps,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Features1,
    Hero,
    CTA,
    Testimonial,
    Features2,
    Banner2,
    Footer,
    Navbar,
    Pricing,
    Contact,
    Steps,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
