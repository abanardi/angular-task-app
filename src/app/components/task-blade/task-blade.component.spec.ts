import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBladeComponent } from './task-blade.component';

describe('TaskBladeComponent', () => {
  let component: TaskBladeComponent;
  let fixture: ComponentFixture<TaskBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
