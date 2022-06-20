import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'lib-travel-list', templateUrl: './travel-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TravelListComponent {
}
