import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
  title="About us";
  authorized: boolean;

  constructor(private route: ActivatedRoute) {
    this.authorized = this.route.snapshot.data['authorized'];
  }
}
