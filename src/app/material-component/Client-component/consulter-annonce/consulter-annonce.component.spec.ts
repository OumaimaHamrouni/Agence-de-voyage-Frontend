import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAnnonceComponent } from './consulter-annonce.component';

describe('ConsulterAnnonceComponent', () => {
  let component: ConsulterAnnonceComponent;
  let fixture: ComponentFixture<ConsulterAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
