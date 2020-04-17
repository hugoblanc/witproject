import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectDetailsComponent } from './project-details.component';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { Router } from '@angular/router';
import { Project } from '../../models/project';


describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  const activatedRoute = new ActivatedRouteStub();
  let page: Page;

  const project = new Project({
    id: 1,
    name: 'NeuralJS',
    githubLink: 'https://github.com/hugoblanc/NeuralJS',
    imageUrl: 'https://miro.medium.com/max/6000/1*wT6pIMnjZ9oArkidnVsGtg.png'
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    activatedRoute.setParamMap({ id: 1 });
    createComponent();
  }));



  /** Create the HeroDetailComponent, initialize it, set test variables  */
  function createComponent() {
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    page = new Page(fixture);

    // 1st change detection triggers ngOnInit which gets a hero
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();
    });
  }


  // it('should display that hero\'s name', () => {
  //   expect(page.nameDisplay.textContent).toBe(project.name);
  // });


});

class Page {
  // getter properties wait to query the DOM until called.
  // get buttons()     { return this.queryAll<HTMLButtonElement>('button'); }
  // get saveBtn()     { return this.buttons[0]; }
  // get cancelBtn()   { return this.buttons[1]; }
  get nameDisplay() { return this.query<HTMLElement>('h2'); }
  // get nameInput()   { return this.query<HTMLInputElement>('input'); }


  constructor(private fixture: ComponentFixture<ProjectDetailsComponent>) {
    // get the navigate spy from the injected router spy object
    const routerSpy = fixture.debugElement.injector.get(Router) as any;


    // spy on component's `gotoList()` method
    const component = fixture.componentInstance;
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return this.fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return this.fixture.nativeElement.querySelectorAll(selector);
  }
}

