import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  @Input()
  plan3: string = 'Premium Plan'
  @Input()
  plan31: string = 'Enterprise plan'
  @Input()
  plan2Feature41: string = 'Feature text goes here'
  @Input()
  plan3Feature4: string = 'Feature text goes here'
  @Input()
  plan3Action: string = 'Sign Up Now'
  @Input()
  content1: string = 'Choose the perfect plan for you'
  @Input()
  plan1Action: string = 'Sign Up Now'
  @Input()
  plan1Feature2: string = '24/7 customer support'
  @Input()
  plan3Price: string = '$79.99/month'
  @Input()
  plan3Feature2: string = 'Priority access to specialists'
  @Input()
  plan3Yearly1: string = 'or $49 monthly'
  @Input()
  plan2Feature11: string = 'Feature text goes here'
  @Input()
  plan2Feature21: string = 'Feature text goes here'
  @Input()
  plan1: string = 'Basic Plan'
  @Input()
  plan21: string = 'Business plan'
  @Input()
  plan3Yearly: string = '$799.99/year'
  @Input()
  plan2Feature4: string = 'Feature text goes here'
  @Input()
  plan2Yearly1: string = 'or $29 monthly'
  @Input()
  heading1: string = 'Pricing plan'
  @Input()
  plan1Action1: string = 'Get started'
  @Input()
  plan3Feature31: string = 'Feature text goes here'
  @Input()
  plan1Feature21: string = 'Feature text goes here'
  @Input()
  plan1Feature1: string = 'Access to basic health monitoring tools'
  @Input()
  plan1Price: string = '$29.99/month'
  @Input()
  plan2Yearly: string = '$499.99/year'
  @Input()
  plan1Price1: string = '$200/yr'
  @Input()
  plan2Price: string = '$49.99/month'
  @Input()
  plan1Feature11: string = 'Feature text goes here'
  @Input()
  plan2Feature31: string = 'Feature text goes here'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  plan3Feature21: string = 'Feature text goes here'
  @Input()
  plan2Price1: string = '$299/yr'
  @Input()
  plan3Feature3: string = 'Advanced health analytics'
  @Input()
  plan2Action: string = 'Sign Up Now'
  @Input()
  plan3Feature51: string = 'Feature text goes here'
  @Input()
  plan1Feature31: string = 'Feature text goes here'
  @Input()
  plan2Action1: string = 'Get started'
  @Input()
  plan3Feature1: string = 'All features of Standard Plan'
  @Input()
  plan3Feature11: string = 'Feature text goes here'
  @Input()
  plan2Feature3: string = 'Health data encryption'
  @Input()
  plan11: string = 'Basic plan'
  @Input()
  plan2: string = 'Standard Plan'
  @Input()
  plan3Feature41: string = 'Feature text goes here'
  @Input()
  plan1Feature3: string = 'Monthly health reports'
  @Input()
  plan2Feature1: string = 'All features of Basic Plan'
  @Input()
  plan3Feature5: string = 'Feature text goes here'
  @Input()
  plan3Price1: string = '$499/yr'
  @Input()
  plan3Action1: string = 'Get started'
  @Input()
  plan1Yearly1: string = 'or $20 monthly'
  @Input()
  plan1Yearly: string = '$299.99/year'
  @Input()
  plan2Feature2: string = 'Personalized health recommendations'
  isMonthly: boolean = true
  constructor() {}
}
