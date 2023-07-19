import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { SharedDataService } from './helpers/shared-data.service';
import { UserLoggedIn } from './model/UserLoggedIn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gyakorloFrontend';

  constructor(private storageService: StorageService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
  }
  
}
