import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjalistComponent } from './ninjalist.component';

describe('NinjalistComponent', () => {
  let component: NinjalistComponent;
  let fixture: ComponentFixture<NinjalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinjalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
