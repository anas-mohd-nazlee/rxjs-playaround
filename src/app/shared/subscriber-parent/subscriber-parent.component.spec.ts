import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberParentComponent } from './subscriber-parent.component';

describe('SubscriberParentComponent', () => {
  let component: SubscriberParentComponent;
  let fixture: ComponentFixture<SubscriberParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
