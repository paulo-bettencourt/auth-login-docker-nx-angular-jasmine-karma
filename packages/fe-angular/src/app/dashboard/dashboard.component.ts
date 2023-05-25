import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginData } from '../models/model.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userData!: any;

  constructor(public router: Router) {
    this.userData = this.router.getCurrentNavigation()?.extras.state;
  }
}
