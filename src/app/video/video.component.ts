import { Component, OnInit } from '@angular/core';
import {VideoDBService} from '../shared/video-db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  length = 0;
  name = 'Video App';
  videos = ['Angular', 'TypeScript', 'JavaScript', 'Node', 'Ract', 'Vue'];
  url = 'https://www.youtube.com/watch?v=VDB65S6rCC0';

  constructor(private route: ActivatedRoute, datenbank: VideoDBService) {
    // datenbank = new VideoDBService();  // wird automatisch über Decorator injected! im Module providers eintragen und dort importieren!
    this.videos = datenbank.getVideos();
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  }

  myClickHandler() {
    // this.length = this.length + 1;
    console.log(this.videos);
  }

}
