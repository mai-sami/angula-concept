import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropaertBindingComponent } from './propaert-binding.component';

describe('PropaertBindingComponent', () => {
  let component: PropaertBindingComponent;
  let fixture: ComponentFixture<PropaertBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropaertBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropaertBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
