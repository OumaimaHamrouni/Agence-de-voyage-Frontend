import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresponsableComponent } from './addresponsable.component';

describe('AddresponsableComponent', () => {
  let component: AddresponsableComponent;
  let fixture: ComponentFixture<AddresponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
