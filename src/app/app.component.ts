import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  massTimingsHtml: any;
  title = 'task1-youtube';
  youtubeId: any;
  videoURL = '';
  item = '';
  // videoURL = `https://www.youtube.com/embed/${this.youtubeId}`;
  safeURL: SafeUrl;
  private _inputItem: string = '<input type="text" placeholder="Type video-id here" id="input" />';
  e: any;

  constructor(private sanitizer: DomSanitizer) {
    // this.sanitizer.bypassSecurityTrustUrl(this.youtubeId)
    // console.log(this.youtubeId);
    // this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  public get inputItem(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this._inputItem);
  }



  search() {
    this.item = (<HTMLInputElement>document.getElementById("input")).value
    // console.log(this.item)
    this.youtubeId = this.item;
    // console.log("****" + this.youtubeId)
    this.videoURL = 'https://www.youtube.com/embed/' + this.youtubeId;
    // console.log(this.videoURL)
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    // console.log("safeurl")
    // this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(`<iframe width="460" height="315" [src]='${this.safeURL}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`)
    // console.log(this.safeHTML)
    // this.postHTML = this.assembleHtml()
    // console.log(this.youtubeId)
    // console.log(this.videoURL)
  }
  // P1KZHQDEpWo
}
