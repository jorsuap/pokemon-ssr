import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
