import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { Project } from '../../../../models/project';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = new Project({
      id: 1,
      name: 'NeuralJS',
      description: 'implémentation from scratch d\'un réseau neuronal en JS',
      funFact: 'La version JS marche bien, la version typescript est hésitante sur la descente de gradient ... ',
      githubLink: 'https://github.com/hugoblanc/NeuralJS',
      imageUrl: 'https://miro.medium.com/max/6000/1*wT6pIMnjZ9oArkidnVsGtg.png'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
