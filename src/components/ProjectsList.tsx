import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { fetchProjects } from '../api/projects';
import { Project } from '../types/Project';

import { ProjectItem } from './ProjectItem';

export const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [hasError, setHasError] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const getProjectsFromServer = async () => {
      try {
        setHasError(false);
        const projectsFromServer = await fetchProjects<Project[]>();
        setProjects(projectsFromServer.reverse());
      } catch {
        setHasError(true);
      }
    };

    void getProjectsFromServer();
  }, []);

  const visibleProjects = useMemo(
    () => (showMore ? projects : projects?.slice(0, 3)),
    [showMore, projects],
  );

  return (
    <section className="section" id="works">
      <div
        className={classNames('animation', 'animation--bottom', {
          visible: inView,
        })}
        ref={ref}
      >
        <h2 className="section__title">Some Things I&apos;ve Built</h2>
        <div className="projects">
          {hasError && <div className="error">Can&apos;t load projects</div>}
          {visibleProjects && (
            <ul className="projects__list">
              {visibleProjects.map((project) => (
                <ProjectItem project={project} key={project.id} />
              ))}
            </ul>
          )}
          {!hasError && (
            <button
              type="button"
              className="button projects__button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
