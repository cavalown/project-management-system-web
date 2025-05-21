import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagemnetComponent } from './project-managemnet.component';

describe('ProjectManagemnetComponent', () => {
  let component: ProjectManagemnetComponent;
  let fixture: ComponentFixture<ProjectManagemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagemnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
