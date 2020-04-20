import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemodelComponent } from './managemodel.component';

describe('ManagemodelComponent', () => {
  let component: ManagemodelComponent;
  let fixture: ComponentFixture<ManagemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
