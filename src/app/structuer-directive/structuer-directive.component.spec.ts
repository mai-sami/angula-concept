import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuerDirectiveComponent } from './structuer-directive.component';

describe('StructuerDirectiveComponent', () => {
  let component: StructuerDirectiveComponent;
  let fixture: ComponentFixture<StructuerDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuerDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
