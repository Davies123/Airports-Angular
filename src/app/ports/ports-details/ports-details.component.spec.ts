import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsDetailsComponent } from './ports-details.component';

describe('PortsDetailsComponent', () => {
  let component: PortsDetailsComponent;
  let fixture: ComponentFixture<PortsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
