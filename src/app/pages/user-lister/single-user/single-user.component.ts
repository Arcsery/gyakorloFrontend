import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { BackendService } from 'src/app/services/backend.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  showEditForm: boolean = false
  userId: string = ''
  user: User | undefined;
  constructor(public layoutService: LayoutService, private actRoute: ActivatedRoute, private backendService: BackendService){}
  

  showEditFormFunc(){
      this.showEditForm = true;
      if(this.layoutService.state.overlayMenuActive){
        this.layoutService.state.overlayMenuActive = false;
      }
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = String(params.get('userId'));
    })

    this.backendService.getUserById(Number(this.userId)).subscribe({
      next: (result) =>{
        this.user = result
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
