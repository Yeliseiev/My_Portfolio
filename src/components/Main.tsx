import { Introduction } from './Introduction';
import { About } from './About';
import { ProjectsList } from './ProjectsList';
import { Contacts } from './Contacts';
import { Decors } from './Decors';

export const Main = () => (
  <main className="main">
    <Decors />
    <Introduction />
    <About />
    <ProjectsList />
    <Contacts />
  </main>
);
