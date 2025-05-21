import { Routes } from '@angular/router';
import { CustomerListComponent } from './app/components/lists/customer-list/customer-list.component';
import { InvoiceListComponent } from './app/components/lists/invoice-list/invoice-list.component';
import { RoleListComponent } from './app/components/lists/role-list/role-list.component';
import { ServiceListComponent } from './app/components/lists/service-list/service-list.component';
import { TagListComponent } from './app/components/lists/tag-list/tag-list.component';
import { ProjectManagemnetComponent } from './app/components/managemnets/project-managemnet/project-managemnet.component';
import { CommingSoonPageComponent } from './app/view/comming-soon-page/comming-soon-page.component';
import { ErrorPageComponent } from './app/view/error-page/error-page.component';
import { MainPageComponent } from './app/view/main-page/main-page.component';

export const routes: Routes = [
  // {path: '', component: AuthPageComponent}
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      { path: 'project', component: ProjectManagemnetComponent },
      { path: 'my-task', component: CommingSoonPageComponent },
      { path: 'invoice', component: InvoiceListComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'service', component: ServiceListComponent },
      { path: 'tag', component: TagListComponent },
      { path: 'role', component: RoleListComponent },
    ]
  },
  { path: '**', component: ErrorPageComponent }
];
