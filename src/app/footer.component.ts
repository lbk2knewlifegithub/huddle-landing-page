import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './models';

@Component({
  selector: 'lbk-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="container">
      <ul class="flex gap-4 justify-center lg:justify-end">
        <ng-container *ngFor="let link of links">
          <li
            class="duration-500 group border rounded-full w-9 h-9 grid place-content-center  hover:border-primary-800"
          >
            <a
              href="#"
              class="text-white text-lg block group-hover:text-primary-800"
            >
              <span [classList]="link.icon"></span>
            </a>
          </li>
        </ng-container>
      </ul>


    </footer>
  `,
})
export class FooterComponent {
  links: Link[] = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      path: '/',
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      path: '/',
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      path: '/',
    },
  ];
}
