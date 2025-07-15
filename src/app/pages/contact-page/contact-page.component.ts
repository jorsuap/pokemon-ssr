import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent implements OnInit {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Esta es la página de contact' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page' });
    this.meta.updateTag({ name: 'og:description', content: 'Esta es la página de contact' });
    this.meta.updateTag({ name: 'keywords', content: 'contact, page, angular' });
  }

}
