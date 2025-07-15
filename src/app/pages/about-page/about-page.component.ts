import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutPageComponent implements OnInit {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'description', content: 'Esta es la página de about' });
    this.meta.updateTag({ name: 'og:title', content: 'About Page' });
    this.meta.updateTag({ name: 'og:description', content: 'Esta es la página de about' });
    this.meta.updateTag({ name: 'keywords', content: 'about, page, angular' });
  }
}
