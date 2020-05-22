import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../shared/project.service';

@Component({
  selector: 'wpj-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project = new Project();

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap) => {
      const idStr = paramMap.get('id');
      const id = parseInt(idStr, 10);

      if (Number.isNaN(id)) {
        this.goToHome();
      }

      this.project = this.projectService.getById(id);

      if (!this.project) {
        this.goToHome();
      }
    });
  }

  private goToHome(): void {
    this.router.navigateByUrl('');
  }

}
