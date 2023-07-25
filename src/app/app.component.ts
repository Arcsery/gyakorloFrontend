import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { SharedDataService } from './helpers/shared-data.service';
import { UserLoggedIn } from './model/UserLoggedIn';
import { LayoutService } from './services/layout.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gyakorloFrontend';
  page: string = ""
  routes: Array<string> = [];

  constructor(private router: Router, public layoutService: LayoutService, private storageService: StorageService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {

    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
  }
}
