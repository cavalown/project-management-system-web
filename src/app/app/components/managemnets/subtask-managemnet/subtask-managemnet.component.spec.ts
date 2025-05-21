import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskManagemnetComponent } from './subtask-managemnet.component';

describe('SubtaskManagemnetComponent', () => {
  let component: SubtaskManagemnetComponent;
  let fixture: ComponentFixture<SubtaskManagemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtaskManagemnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtaskManagemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
