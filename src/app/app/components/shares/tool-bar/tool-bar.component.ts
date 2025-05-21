import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material-module';

@Component({
  standalone: true,
  selector: 'app-tool-bar',
  imports: [AngularMaterialModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {

}
