import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerannonceComponent } from './listerannonce.component';

describe('ListerannonceComponent', () => {
  let component: ListerannonceComponent;
  let fixture: ComponentFixture<ListerannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerannonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
