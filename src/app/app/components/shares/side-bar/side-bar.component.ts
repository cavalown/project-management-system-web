import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material-module';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  icon: string;
  items?: Section[];
  path?: string;
}

@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [AngularMaterialModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  folders: Section[] = [
    {
      name: 'Project',
      icon: 'folder',
      items: [
        {
          name: 'Project',
          icon: 'folder',
          path: 'project'
        },
        {
          name: 'My Tasks',
          icon: 'checklist',
          path: 'my-task'
        },
        {
          name: 'Invoice',
          icon: 'receipt_long',
          path: 'invoice'
        },
      ]
    },
    {
      name: 'Customer',
      icon: 'folder',
      items: [
        {
          name: 'Cutomer',
          icon: 'people',
          path: 'customer'
        },
        {
          name: 'Service',
          icon: 'volunteer_activism',
          path: 'service'
        },
      ]
    },
    {
      name: 'Tool',
      icon: 'folder',
      items: [
        {
          name: 'Tag',
          icon: 'tag',
          path: 'tag'
        },
        {
          name: 'Role',
          icon: 'add_moderator',
          path: 'role'
        },
      ]
    },
  ];
  constructor(private router: Router) { }
  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
