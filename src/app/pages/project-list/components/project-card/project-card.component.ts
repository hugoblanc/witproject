import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../../models/project';

@Component({
  selector: 'wpj-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

@Input() project: Project ;

  constructor() { }

  ngOnInit(): void {
  }

}
