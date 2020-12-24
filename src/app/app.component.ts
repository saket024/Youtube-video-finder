import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1-youtube';
  youtubeId = '';
  videoURL = '';
  // videoURL = `https://www.youtube.com/embed/${this.youtubeId}`;
  safeURL: any;
  e: any;
  constructor(private sanitizer: DomSanitizer) {
    console.log(this.youtubeId)
    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }
  search(item) {
    console.log(item)
    this.youtubeId = item;
    this.videoURL = `https://www.youtube.com/embed/${this.youtubeId}`;
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    // console.log(this.youtubeId)
    // console.log(this.videoURL)
  }
  // P1KZHQDEpWo
}
