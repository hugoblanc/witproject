import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'wpj-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];


  constructor() { }

  ngOnInit(): void {

    this.projects.push(new Project({
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
  }

}
