import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {

  showEditForm: boolean = false

  constructor(public layoutService: LayoutService){}

  showEditFormFunc(){
      this.showEditForm = true;
      if(this.layoutService.state.overlayMenuActive){
        this.layoutService.state.overlayMenuActive = false;
      }
  }

}
