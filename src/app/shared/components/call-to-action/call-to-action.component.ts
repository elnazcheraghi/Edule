import { Component } from '@angular/core';

@Component({
  selector: 'call-to-action',
  templateUrl: './call-to-action.component.html',
  styles: [
    `
      .call-to-action {
        background-color: var(--nature-green);
        color: var(--common-white);
        padding: 5% 15%;
      }
    `,
  ],
})
export class CallToActionComponent {}
