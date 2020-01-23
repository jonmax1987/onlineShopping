import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDocComponent } from './api-doc.component';

describe('APIDocComponent', () => {
  let component: APIDocComponent;
  let fixture: ComponentFixture<APIDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
