import { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Introduction = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setShowElement(true);
  }, []);

  const one = <p className="introduction__hello">Hi, my name is</p>;
  const two = <h1 className="introduction__title">Kim Yeliseiev.</h1>;
  const three = (
    <p className="introduction__title--additionally">
      I build things for the web.
    </p>
  );
  const four = (
    <p className="introduction__text">
      I am a purposeful software developer with strong programming skills. Well
      familiar with CSS/HTML, Sass preprocessor, cross-browser and adaptive
      markup skills. Good at JavaScript coding, solving algorithmic tasks and
      developing user-friendly solutions. I am a responsible individual who
      continually advances skills and abilities. Very interested in studying
      React Native, NodeJS. Ready for joining upon request.
    </p>
  );
  const five = (
    <a
      href="https://github.com/Yeliseiev"
      className="button introduction__button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Check out my github!
    </a>
  );

  const elements = [one, two, three, four, five];

  return (
    <section className="section section__max introduction">
      <TransitionGroup component={null}>
        {showElement &&
          elements.map((elem, i) => (
            <CSSTransition
              in={showElement}
              timeout={800}
              classNames="fadeup"
              key={i}
            >
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{elem}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
};
