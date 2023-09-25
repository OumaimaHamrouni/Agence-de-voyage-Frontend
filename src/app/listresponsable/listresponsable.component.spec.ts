import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresponsableComponent } from './listresponsable.component';

describe('ListresponsableComponent', () => {
  let component: ListresponsableComponent;
  let fixture: ComponentFixture<ListresponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListresponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
