import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-count-video',
  templateUrl: './test-count-video.component.html',
  styleUrls: ['./test-count-video.component.css']
})
export class TestCountVideoComponent implements OnInit {
  length = 5;
  name = 'Video App';
  url = 'https://www.youtube.com/watch?v=VDB65S6rCC0';

  constructor() { }
  ngOnInit() {
  }

  lengthCounter(e) {
    this.length = this.length + 1;
    console.log(e);
  }

}
