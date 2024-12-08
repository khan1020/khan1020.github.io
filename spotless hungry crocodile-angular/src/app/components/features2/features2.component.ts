import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1579766843772-f4c5ec56376c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature2Description: string =
    'Real-time monitoring of vital signs and health data for proactive healthcare management.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1576669802367-42e9fd83d9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1603394151492-5e9b974b090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature2ImgAlt: string = 'Smart Monitoring Image Alt Text'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature2Title: string = 'Smart Monitoring'
  activeTab: number = 0
  constructor() {}
}
