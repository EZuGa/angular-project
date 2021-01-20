import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutisCvlaComponent } from './valutis-cvla.component';

describe('ValutisCvlaComponent', () => {
  let component: ValutisCvlaComponent;
  let fixture: ComponentFixture<ValutisCvlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutisCvlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutisCvlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
