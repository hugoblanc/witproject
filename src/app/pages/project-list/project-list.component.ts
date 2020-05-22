import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../shared/project.service';

/**
 * A component in charge of displaying project list
 */
@Component({
  selector: 'wpj-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  /**
   * List of projects to display
   */
  projects: Project[] = [];


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
