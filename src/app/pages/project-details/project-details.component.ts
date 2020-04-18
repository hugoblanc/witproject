import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'wpj-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project = new Project();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap) => {
      const projects = [];
      projects.push(new Project({
        id: 1,
        name: 'NeuralJS',
        githubLink: 'https://github.com/hugoblanc/NeuralJS',
        imageUrl: 'https://miro.medium.com/max/6000/1*wT6pIMnjZ9oArkidnVsGtg.png'
      }), new Project({
        id: 2,
        name: 'Athena',
        githubLink: 'https://github.com/hugoblanc/Athena',
        imageUrl: 'https://avatars3.githubusercontent.com/u/15015179?s=460&u=62c173794efcef6d92e06eb4c648fef3369c4598&v=4'
      }));


      const idStr = paramMap.get('id');
      const id = parseInt(idStr, 10);
      if (Number.isNaN(id)) {
        this.router.navigateByUrl('');
      }


      this.project = projects.find((p: Project) => p.id === id);

    });
  }

}
