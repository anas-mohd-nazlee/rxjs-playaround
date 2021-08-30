import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetParentComponent } from './target-parent.component';

describe('TargetParentComponent', () => {
  let component: TargetParentComponent;
  let fixture: ComponentFixture<TargetParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
