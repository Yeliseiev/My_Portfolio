import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import classNames from 'classnames';

import { menuItems } from '../utils/config';
import { MenuType } from '../types/MenuType';

interface Props {
  menuType: MenuType;
}

export const Menu: React.FC<Props> = ({ menuType }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <nav
      className={classNames('menu', {
        'menu--footer': menuType === MenuType.FOOTER,
      })}
    >
      <div className="menu__wrapper">
        <ol className="menu__list">
          <TransitionGroup component={null}>
            {show &&
              menuItems.map(({ name, url }, i) => (
                <CSSTransition
                  key={url}
                  in={show}
                  timeout={100}
                  classNames="fadedown"
                  appear
                >
                  <li
                    key={url}
                    className="menu__item"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <a href={url} className="menu__link">
                      {name}
                    </a>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
          {menuType === MenuType.FOOTER && (
            <li className="menu__item">
              <a href="#top" className="menu__link">
                Go Top
              </a>
            </li>
          )}
        </ol>
        {menuType === MenuType.HEADER && (
          <TransitionGroup component={null}>
            {show && (
              <CSSTransition in={show} timeout={100} classNames="fadedown">
                <div style={{ transitionDelay: `${menuItems.length * 100}ms` }}>
                  <a
                    href="./cv/Kim_Yeliseiev_CV.pdf"
                    className="button menu__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
      </div>
    </nav>
  );
};
