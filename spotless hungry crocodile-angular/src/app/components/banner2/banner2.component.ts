import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-banner2',
  templateUrl: 'banner2.component.html',
  styleUrls: ['banner2.component.css'],
})
export class Banner2 {
  @Input()
  video1Src: string =
    'https://videos.pexels.com/video-files/5083290/5083290-hd_2048_1080_25fps.mp4'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  video1Poster: string =
    'https://images.pexels.com/videos/5083290/pictures/preview-0.jpg'
  constructor() {}
}
