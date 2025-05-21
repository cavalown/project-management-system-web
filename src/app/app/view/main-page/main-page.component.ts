import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/shares/side-bar/side-bar.component";
import { ToolBarComponent } from '../../components/shares/tool-bar/tool-bar.component';
import { AngularMaterialModule } from '../../modules/angular-material-module';
import { SharedImportModule } from '../../modules/shared-import-module';

@Component({
  standalone: true,
  selector: 'app-main-page',
  imports: [SharedImportModule, SideBarComponent, ToolBarComponent, AngularMaterialModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
