import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'lib-travel-table', templateUrl: './travel-table.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TravelTableComponent {
}
