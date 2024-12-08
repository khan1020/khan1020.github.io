import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  review1: string =
    'The Smart Healthcare Portal has revolutionized the way we manage our healthcare services. It has streamlined our processes and improved efficiency across the board.'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author3Alt: string = 'Image of Michael Johnson'
  @Input()
  author2Name: string = 'Jane Smith'
  @Input()
  author3Position: string = 'CFO, LMN Enterprises'
  @Input()
  author1Name: string = 'John Doe'
  @Input()
  review3: string =
    'I highly recommend the Smart Healthcare Portal to any healthcare provider looking to enhance their operations. It has helped us save time and resources while improving patient care.'
  @Input()
  review2: string =
    'We have been using the Smart Healthcare Portal for a few months now, and it has exceeded our expectations. The user-friendly interface and advanced features make it a valuable tool for our organization.'
  @Input()
  author3Name: string = 'Michael Johnson'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1499313843378-eebdb187f629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1496203695688-3b8985780d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Position: string = 'CEO, ABC Company'
  @Input()
  author4Position: string = 'CMO, PQR Healthcare'
  @Input()
  review4: string =
    'The Smart Healthcare Portal has been a game-changer for our organization. It has increased collaboration among our teams and improved communication with patients.'
  @Input()
  author2Position: string = 'COO, XYZ Corporation'
  @Input()
  author4Alt: string = 'Image of Sarah Williams'
  @Input()
  author4Name: string = 'Sarah Williams'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1445282650865-52d8ea4e110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1661747675166-5cf96bd5d0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  constructor() {}
}
