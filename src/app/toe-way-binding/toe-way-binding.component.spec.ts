import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeWayBindingComponent } from './toe-way-binding.component';

describe('ToeWayBindingComponent', () => {
  let component: ToeWayBindingComponent;
  let fixture: ComponentFixture<ToeWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToeWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
