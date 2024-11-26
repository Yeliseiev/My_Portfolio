import { useInView } from 'react-intersection-observer';

import cn from 'classnames';

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="section about" id="about">
      <div
        className={cn('animation', 'animation--bottom', {
          visible: inView,
        })}
        ref={ref}
      >
        <h2 className="section__title">About me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              Hello! I&apos;m Kim Yeliseiev, a former seaman turned passionate
              front-end developer.
            </p>
            <p>
              Towards the end of 2022, I wholeheartedly embraced the journey of
              becoming a developer. Fast forward to today, I&apos;ve
              successfully completed comprehensive front-end courses and am
              actively seeking opportunities to apply my skills to innovative
              projects. My commitment to mastering these technologies is a
              testament to my passion for creating exceptional user experiences.
              Let&apos;s collaborate and build something extraordinary together!
            </p>
            <p>
              Some of the websites that helped me along the way are{' '}
              <a
                href="https://www.sololearn.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sololearn
              </a>{' '}
              (HTML, CSS, JavaScript),{' '}
              <a
                href="https://developer.mozilla.org/en-US/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN
              </a>
              ,{' '}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3school.com
              </a>
              ,{' '}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reactjs.org
              </a>
              ,{' '}
              <a
                href="https://javascript.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                javascript.info
              </a>{' '}
              and{' '}
              <a
                href="https://www.codewars.com/users/Smith271"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeWars
              </a>{' '}
              (Tasks solving).
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS/SCSS</li>
              <li>JavaScript ES6</li>
              <li>TypeScript</li>
              <li>React/Redux</li>
              <li>Git/NPM/API</li>
            </ul>
          </div>

          <div className="about__wrapper">
            <div className="about__picture">
              <img
                src="./img/frontend.svg"
                className="about__photo"
                alt="fronend picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
