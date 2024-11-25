import { MenuItem } from '../types/MenuItem';
import { SocialItem } from '../types/SocialItem';

import { ReactComponent as Facebook } from '../assets/img/icons/facebook.svg';
import { ReactComponent as GitHub } from '../assets/img/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/img/icons/linkedin.svg';
import { ReactComponent as CodeWars } from '../assets/img/icons/codewars.svg';

export const menuItems: MenuItem[] = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Works',
    url: '#works',
  },
  {
    name: 'Contacts',
    url: '#contacts',
  },
];

export const socialItems: SocialItem[] = [
  {
    fill: 'stroke',
    url: 'https://github.com/Yeliseiev',
    image: <GitHub />,
  },
  {
    fill: 'stroke',
    url: 'https://www.codewars.com/users/Smith271',
    image: <CodeWars />,
  },
  {
    fill: 'stroke',
    url: 'https://www.linkedin.com/in/kim-yeliseiev-398178253/',
    image: <LinkedIn />,
  },
  {
    fill: 'fill',
    url: 'https://www.facebook.com/rbv271',
    image: <Facebook />,
  },
];
