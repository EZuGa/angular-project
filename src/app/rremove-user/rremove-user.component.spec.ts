import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RremoveUserComponent } from './rremove-user.component';

describe('RremoveUserComponent', () => {
  let component: RremoveUserComponent;
  let fixture: ComponentFixture<RremoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RremoveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RremoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
