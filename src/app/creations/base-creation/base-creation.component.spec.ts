import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCreationComponent } from './base-creation.component';

describe('BaseCreationComponent', () => {
  let component: BaseCreationComponent;
  let fixture: ComponentFixture<BaseCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
