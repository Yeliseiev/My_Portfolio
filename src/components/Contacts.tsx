import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

export const Contacts = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="section contacts" id="contacts">
      <div
        className={classNames('animation', 'animation--bottom', {
          visible: inView,
        })}
        ref={ref}
      >
        <h2 className="section__title contacts__title">What&apos;s next?</h2>
        <h2 className="contacts__subtitle">Get In Touch</h2>
        <p className="contacts__text">
          I&apos;m currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <a href="mailto:yeliseiev.kim@gmail.com" className="button">
          Say Hello
        </a>
      </div>
    </section>
  );
};
