import { useEffect, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { MenuType } from '../types/MenuType';

import { Logo } from './Logo';
import { MenuMob } from './Menu-mob';
import { Menu } from './Menu';

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(70);
  const [visible, setVisible] = useState('');
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setShowElement(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      if (currentScrollPos > 70) {
        setPrevScrollPos(currentScrollPos);
      } else {
        setPrevScrollPos(70);
        setVisible('');
      }

      if (isScrolledDown) {
        setVisible('hidden');
      }

      if (prevScrollPos > 70 && !isScrolledDown) {
        setVisible('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header className={`header ${visible}`}>
      <TransitionGroup component={null}>
        {showElement && (
          <CSSTransition timeout={100} classNames="fade" in={showElement}>
            <div>
              <Logo />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
      <MenuMob />
      <Menu menuType={MenuType.HEADER} />
    </header>
  );
};
