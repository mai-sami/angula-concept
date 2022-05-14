import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforhDirectiveComponent } from './ngforh-directive.component';

describe('NgforhDirectiveComponent', () => {
  let component: NgforhDirectiveComponent;
  let fixture: ComponentFixture<NgforhDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforhDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforhDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
