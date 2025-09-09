import { ChangeDetectionStrategy , Component } from '@angular/core';
  import { MatButtonModule } from '@angular/material/button';
  import { MatCardModule } from '@angular/material/card';
  import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-material',
  standalone: true,
  templateUrl: './material.html',
  styleUrl: './material.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
  
})
export class Material {

}
