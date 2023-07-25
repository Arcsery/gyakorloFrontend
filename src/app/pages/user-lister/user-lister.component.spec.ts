import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListerComponent } from './user-lister.component';

describe('UserListerComponent', () => {
  let component: UserListerComponent;
  let fixture: ComponentFixture<UserListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
