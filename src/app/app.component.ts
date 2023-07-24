import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { SharedDataService } from './helpers/shared-data.service';
import { UserLoggedIn } from './model/UserLoggedIn';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gyakorloFrontend';
  sidebarVisible: boolean = true

  constructor(public layoutService: LayoutService, private storageService: StorageService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
  }
}
