import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { menuItems } from '../utils/config';

import { Burger } from './Burger';

export const MenuMob = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowElement(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current || menuRef.current.contains(e.target as ChildNode)) {
        return;
      }

      setIsChecked(false);
    };

    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [setIsChecked]);

  return (
    <div ref={menuRef}>
      <TransitionGroup component={null}>
        {showElement && (
          <CSSTransition timeout={100} classNames="fade" in={showElement}>
            <Burger isChecked={isChecked} onCheck={setIsChecked} />
          </CSSTransition>
        )}
      </TransitionGroup>
      <nav className={classNames('menu-mob', { open: isChecked })}>
        <div className="menu-mob__wrapper">
          <ol className="menu-mob__list">
            {menuItems.map(({ name, url }) => (
              <li className="menu-mob__list-item" key={url}>
                <a
                  href={url}
                  className="menu-mob__list-link"
                  onClick={() => setIsChecked(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="./cv/Kim_Yeliseiev_CV.pdf"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsChecked(false)}
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
};
