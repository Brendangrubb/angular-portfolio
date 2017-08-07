import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDeployComponent } from './no-deploy.component';

describe('NoDeployComponent', () => {
  let component: NoDeployComponent;
  let fixture: ComponentFixture<NoDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
