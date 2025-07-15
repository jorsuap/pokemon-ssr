import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      this.title.setTitle('Pricing Page');
      this.meta.updateTag({ name: 'description', content: 'Esta es la página de pricing' });
      this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
      this.meta.updateTag({ name: 'og:description', content: 'Esta es la página de pricing' });
      this.meta.updateTag({ name: 'keywords', content: 'pricing, page, angular' });
    }
  }
}
