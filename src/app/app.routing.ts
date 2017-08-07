import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { NoDeployComponent } from './no-deploy/no-deploy.component';

const appRoutes: Routes = [
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'no-deploy',
    component: NoDeployComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
