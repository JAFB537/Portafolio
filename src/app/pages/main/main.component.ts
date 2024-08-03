import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfoComponent } from '../../components/info/info.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InfoComponent, ExperienceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
