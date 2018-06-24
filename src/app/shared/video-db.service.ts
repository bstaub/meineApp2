import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoDBService {
  videos: string[];
  constructor() {
    this.videos = ['Video1 aus Service', 'Video2 aus Service', 'Video3 aus Service', 'Video4 aus Service' ];
  }
  getVideos(){
    return this.videos;
  }
}
