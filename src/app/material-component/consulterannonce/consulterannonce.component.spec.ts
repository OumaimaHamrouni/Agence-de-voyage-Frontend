import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterannonceComponent } from './consulterannonce.component';

describe('ConsulterannonceComponent', () => {
  let component: ConsulterannonceComponent;
  let fixture: ComponentFixture<ConsulterannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterannonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
