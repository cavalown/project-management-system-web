import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagemnetComponent } from './task-managemnet.component';

describe('TaskManagemnetComponent', () => {
  let component: TaskManagemnetComponent;
  let fixture: ComponentFixture<TaskManagemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagemnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
