import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature2Title: string = 'Real-time Health Monitoring'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1666887360862-75274811b27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgAlt: string = 'Smart Healthcare Portal Feature 1 Image'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3Description: string =
    'Access to personalized health records and medical history'
  @Input()
  feature2Description: string =
    'Real-time monitoring of vital signs and health metrics'
  @Input()
  feature3Title: string = 'Personalized Health Records'
  @Input()
  feature3ImgAlt: string = 'Smart Healthcare Portal Feature 3 Image'
  @Input()
  feature2ImgAlt: string = 'Smart Healthcare Portal Feature 2 Image'
  @Input()
  feature1Title: string = 'Centralized Health Information'
  @Input()
  feature1Description: string =
    'Store and manage all health-related information in one secure location'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1666886573199-88a2ed65470d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2M3w&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
