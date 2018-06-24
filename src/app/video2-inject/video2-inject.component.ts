import {Component, Inject, OnInit} from '@angular/core';
import {VideoDBService} from '../shared/video-db.service';

@Component({
  selector: 'app-video2-inject',
  templateUrl: './video2-inject.component.html',
  styleUrls: ['./video2-inject.component.css']
})
export class Video2InjectComponent implements OnInit {
  videos = [];
  constructor(datenbank: VideoDBService, @Inject('VideoComponentConfig') config: string) {
    // datenbank = new VideoDBService();  // wird automatisch über Decorator injected! im Module providers eintragen und dort importieren!
    this.videos = datenbank.getVideos();
    console.log(config);
    console.log(this.videos);
  }

  ngOnInit() {
  }

  myClickHandler() {
    console.log(this.videos);
  }
}
