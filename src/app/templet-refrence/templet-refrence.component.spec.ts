import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletRefrenceComponent } from './templet-refrence.component';

describe('TempletRefrenceComponent', () => {
  let component: TempletRefrenceComponent;
  let fixture: ComponentFixture<TempletRefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletRefrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletRefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
