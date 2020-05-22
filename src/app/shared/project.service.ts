import { Injectable } from '@angular/core';
import jsonProjects from './projects.json';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    const projects = jsonProjects.map(jsonProject => new Project(jsonProject));
    return projects;
  }

}
