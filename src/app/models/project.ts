export class Project {
  id: number;
  name: string;
  imageUrl: string;
  githubLink: string;

  constructor(project?: Project) {
    Object.assign(this, project);
  }

}
