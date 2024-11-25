import React from 'react';

interface MenuItem {
  name: string;
  url: string;
}

interface Props {
  item: MenuItem;
  i: number;
}

export const NavItem: React.FC<Props> = ({ item, i }) => (
  <li
    key={item.url}
    className="menu__item"
    style={{ transitionDelay: `${i * 100}ms` }}
  >
    <a href={item.url} className="menu__link">
      {item.name}
    </a>
  </li>
);
