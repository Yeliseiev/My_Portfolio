import { MenuType } from '../types/MenuType';
import { socialItems } from '../utils/config';

import { Menu } from './Menu';

export const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      {socialItems.map(({ fill, url, image }) => (
        <li key={url}>
          <a
            href={url}
            className={`footer__link footer__link--${fill}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image}
          </a>
        </li>
      ))}
    </ul>

    <Menu menuType={MenuType.FOOTER} />
  </footer>
);
