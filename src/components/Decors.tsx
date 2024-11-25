import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { DecorType } from '../types/DecorType';

import { Decor } from './Decor';

export const Decors = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setShowElement(true);
  }, []);

  return (
    <TransitionGroup component={null}>
      {showElement && (
        <>
          <CSSTransition timeout={2000} in={showElement} classNames="fade">
            <div>
              <Decor position={DecorType.LEFT} />
            </div>
          </CSSTransition>
          <CSSTransition timeout={2000} in={showElement} classNames="fade">
            <Decor position={DecorType.RIGHT} />
          </CSSTransition>
        </>
      )}
    </TransitionGroup>
  );
};
