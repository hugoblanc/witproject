import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { Project } from '../models/project';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should has a getProjects method', () => {
    expect(service.getProjects).toBeDefined();
  });

  it('should has a getProjects which returns a non empty array', () => {
    const projects = service.getProjects();
    expect(projects).toBeDefined();
    expect(projects.length).toBeGreaterThan(0);
  });


  it('should has a getProjects which returns at least one Project', () => {
    const projects = service.getProjects();
    const project = projects[0];
    expect(project).toBeInstanceOf(Project);
  });


});
