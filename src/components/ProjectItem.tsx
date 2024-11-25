import React from 'react';

import { useInView } from 'react-intersection-observer';

import classNames from 'classnames';

import { Project } from '../types/Project';
import { ReactComponent as GitHub } from '../assets/img/icons/github.svg';
import { ReactComponent as WebLink } from '../assets/img/icons/link.svg';
import { ReactComponent as Figma } from '../assets/img/icons/figma.svg';

interface Props {
  project: Project;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <li
      className={classNames('project', 'animation', 'animation--bottom', {
        visible: inView,
      })}
      ref={ref}
    >
      <div className="project__content">
        <p className="project__content-overline">Featured Project</p>

        <h3 className="project__content-title">
          <a href={project.webURL} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <div className="project__content-description">
          <p>{project.description}</p>
        </div>

        <ul className="project__content-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project__content-links">
          <a
            href={project.projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="project__content-link"
            aria-label="githubLink"
          >
            <GitHub />
          </a>
          <a
            href={project.webURL}
            target="_blank"
            rel="noopener noreferrer"
            className="project__content-link"
            aria-label="webLink"
          >
            <WebLink />
          </a>
          {project.layoutURL && (
            <a
              href={project.layoutURL}
              target="_blank"
              rel="noopener noreferrer"
              className="project__content-link project__content-link-figma"
              aria-label="figmaLink"
            >
              <Figma />
            </a>
          )}
        </div>
      </div>

      <a
        href={project.webURL}
        target="_blank"
        rel="noopener noreferrer"
        className="project__picture"
      >
        <img
          src={`${project.img}`}
          alt={project.slug}
          className="project__picture-image"
        />
      </a>
    </li>
  );
};
