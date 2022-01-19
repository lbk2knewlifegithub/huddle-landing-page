import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-author',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="text-white text-center">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a
        class="text-black decoration-wavy"
        href="https://github.com/lbk2knewlifegithub"
        >lbk2k</a
      >.
    </p>
  `,
})
export class AuthorComponent {}
