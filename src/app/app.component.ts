import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs-playaround';
  moduleName = "";
  topicName = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => this.updateModuleAndTopicName(e));
  }

  private updateModuleAndTopicName(navEvent: any) {
    const urlSegments = (navEvent as NavigationEnd).url.split("/");
    this.moduleName = urlSegments[1];
    this.topicName = urlSegments[2];
  }
}
